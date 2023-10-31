const User = require("../Model/userModule/users");
const Post = require("../Model/userModule/posts");
const Spay = require("../Model/userModule/newSpay");

class UserController {
  async getUser(req, res) {
    try {
      let dataUser = await User.findById(
        { _id: req.params.id },
        { passWord: 0 }
      );

      if (dataUser) {
        let dataPost = await Post.find({ userId: dataUser._id });
        return res.status(200).json({
          user: dataUser,
          post: dataPost,
        });
      }
    } catch (error) {}
  }

  upDateUser(req, res) {}

  deleteUser(req, res) {}

  getAllUser(req, res) {}

  async getFriend(req, res) {
    try {
      let data = await User.findById({ _id: req.params.id });
      // console.log(">>1",data)

      if (data) {
        let re = await User.find({ _id: { $in: data.folloWings } });
        if (re) {
          return res.status(200).json(re);
        }
      }
    } catch (error) {}
  }
}

module.exports = new UserController();
