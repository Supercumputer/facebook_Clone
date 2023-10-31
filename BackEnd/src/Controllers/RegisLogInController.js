const Users = require("../Model/users");

require("dotenv").config();

const {
  checkEmail,
  hashPassWord,
  comperPassWord,
  createToken,
} = require("../Service/authentication");

//register new a user
const registerUser = async (req, res, next) => {
  try {
    const { email, passWord } = req.body;

    if (!email || !passWord) {
      return res.status(400).json({
        status: "failure",
        message: "Missing email or passWord",
      });
    }

    let check = await checkEmail(email);

    if (check) {
      return res.status(401).json({
        status: "failure",
        message: "Email already exists.",
      });
    }

    let newPassWord = hashPassWord(passWord);

    await Users.create({ ...req.body, passWord: newPassWord });

    return res.status(200).json({
      status: "success",
      message: "Account successfully created.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//login a user
const loginUser = async (req, res, next) => {
  try {
    const { emailLog, passWordLog } = req.body;

    if (!emailLog || !passWordLog) {
      return res.status(400).json({
        status: "error",
        message: "Missing email or passWord",
      });
    }

    let data = await Users.findOne({ email: emailLog });

    if (data) {
      let checkPass = comperPassWord(passWordLog, data.passWord);

      if (checkPass) {
        const payload = {
          email: data.email,
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          avata: data.avataPicture,
          //expiresIn ngày hết hạn
          expiresIn: process.env.JWT_EXPIRESIN,
        };

        let token = createToken(payload);

        res.cookie("jwt", token, {
          maxAge: process.env.JWT_EXPIRESIN,
          httpOnly: true,
        });

        return res.status(200).json({
          token: token,
          acount: {
            id: data._id,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            avata: data.avataPicture,
          },
        });
      } else {
        return res.status(401).json({
          status: "error",
          message: "Email or password incorrectly",
        });
      }
    } else {
      return res.status(401).json({
        status: "error",
        message: "Email or password incorrectly",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//logout user
const logoutUser = (req, res, next) => {
  try {
    res.clearCookie("jwt");
    return res.status(200).json({
      status: "success",
      message: "Logout success",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "error server",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
