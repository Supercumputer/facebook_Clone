const Users = require("../Model/users");
const Post = require("../Model/posts");
const Spay = require("../Model/newSpay");

const getAcount = (req, res, next) => {
  try {
    return res.status(200).json({
      status: "success",
      token: req.token,
      acount: {
        id: req.user.id,
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        avata: req.user.avata
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//create a user
const createUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let passWord = req.body.passWord;

    if (!email || !passWord) {
      return res.status(400).json({
        status: "error",
        message: "Missing email or passWord",
      });
    }

    if (email && passWord) {
      let emailCheck = await checkEmail(email);
      if (emailCheck === false) {
        let newPassWord = hashPassWord(passWord);
        await Users.create({ ...req.body, passWord: newPassWord });
        return res.status(200).json({
          status: "success",
          message: "Create user success",
        });
      }
    }

    return res.status(400).json({
      status: "error",
      message: "Email already exists",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// get all user
const getAllUser = async (req, res, next) => {
  try {
    const data = await Users.find({});

    if (data.length > 0) {
      return res.status(200).json({
        status: "success",
        data: data,
      });
    }

    return res
      .status(404)
      .json({ status: "error", message: "No user found", data: [] });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//get all trash user
const getAllTrashUser = async (req, res, next) => {
  try {
    const data = await Users.findDeleted({});

    if (data.length > 0) {
      let newData = data.filter((item) => item.deleted);

      return res.status(200).json({
        status: "success",
        data: newData,
      });
    }

    return res
      .status(404)
      .json({ status: "error", message: "No user found", data: [] });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//get a user by id
const getUser = async (req, res, next) => {
  try {
   
    const data = await Users.findById({ _id: req.params.id }, { passWord: 0 });
    
    if (data) {
      let dataPost = await Post.find({ userId: data._id });
      return res.status(200).json({
        status: "success",
        user: data,
        post: dataPost,
      });
    }

    return res.status(400).json({
      status: "error",
      message: "No user found",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//update a user by id
const updateUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    const data = await Users.findById({ _id: id });
    if (data) {
      await Users.updateOne({ _id: id }, req.body);

      return res.status(200).json({
        status: "success",
        message: "Update successful",
      });
    }

    return res.status(400).json({ status: "error", message: "No user found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete a user by id
const deleteUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    const data = await Users.findOneDeleted({ _id: id });

    if (data) {
      await Users.deleteOne({ _id: id });
      return res
        .status(200)
        .json({ status: "success", message: "Delete successful" });
    }

    return res
      .status(400)
      .json({ status: "success", message: "No user found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete soft a user by id
const deleteSoftUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    const data = await Users.findById({ _id: id });

    if (data) {
      await Users.delete({ _id: id });
      return res
        .status(200)
        .json({ status: "success", message: "Delete successful" });
    }

    return res
      .status(400)
      .json({ status: "success", message: "No user found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const restorUser = async (req, res, next) => {
  try {
    const data = await Users.findOneDeleted({ _id: req.params.id });

    if (data) {
      await Users.restore({ _id: req.params.id });
      return res
        .status(200)
        .json({ status: "success", message: "Restor successful" });
    }

    return res
      .status(404)
      .json({ status: "error", message: "No user found", data: [] });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getFriend = async (req, res, next) => {
  try {
    let data = await Users.findById({ _id: req.params.id });

    if (data) {
      let foll = await Users.find({ _id: { $in: data.folloWings } });
      if (foll) {
        return res.status(200).json({ foll });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAcount,
  createUser,
  getAllUser,
  deleteUser,
  deleteSoftUser,
  updateUser,
  getUser,
  getAllTrashUser,
  restorUser,
  getAcount,
  getFriend,
};
