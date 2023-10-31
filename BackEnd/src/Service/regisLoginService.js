const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const Users = require("../Model/userModule/users");
const jwt = require('jsonwebtoken');

function hashPassWord(passWord) {
  const hash = bcrypt.hashSync(passWord, salt);
  return hash;
}

function comparePassWord(myPlaintextPassword, hash) {
  return bcrypt.compareSync(myPlaintextPassword, hash);
}

async function checkEmail(email) {
  let check = await Users.findOne({ email: email });

  if (check) {
    return true;
  }

  return false;
}

async function createUser(data) {
  try {
    let email = await checkEmail(data.email);

    if (email) {
      return {
        messenger: "Email đã tồn tại !!!",
        status: false
      };
    }

    let newPassWord = hashPassWord(data.passWord);

    await Users.create({
      lastName: data.LastName,
      firstName: data.firstName,
      email: data.email,
      passWord: newPassWord,
      date: `${data.day}/${data.month}/${data.year}`,
      gioiTinh: data.gioiTinh,
    });

    return {
      messenger: "Tạo mới user thành công !!!",
      status: true
    };
  } catch (error) {
    console.log(error)
    return {
      messenger: "Create user errors !!!",
    };
  }
}

async function loginUser(data) {
  try {
    let userLog = await Users.findOne({ email: data.email });

    if (userLog) {
      let checkPass = comparePassWord(data.passWord, userLog.passWord)
      if(checkPass){
          let token = jwt.sign({ id: userLog._id }, 'mk');
          return {
            messenger: "Đăng nhập thành công !!!",
            status: true,
            acount: {
              token: token,
              name: `${userLog.lastName} ${userLog.firstName}`,
              firstName: userLog.firstName,
              avata: userLog.avataPicture,
              id: userLog._id
            }
          };
      }else{
          return {
            messenger: "Email hoặc mật khẩu sai vui lòng thử lại !!!",
            status: false,
            acount: {}
          };
      }
    }
    return {
      messenger: "Email hoặc mật khẩu sai vui lòng thử lại !!!",
      status: false,
      token: "",
    };
  } catch (error) {
        return {
          messenger: "Login errors !!!",
        };
  }
}

module.exports = { createUser, loginUser };
