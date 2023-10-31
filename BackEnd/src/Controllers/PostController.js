const User = require("../Model/userModule/users");
const Post = require("../Model/userModule/posts");

class PostController {
  async getAllPost(req, res) {
    try {
      let user = await User.find({});
      let post = await Post.find({});
      if (user && post) {
        let arr = post.map((item) => {
          let us = user.find((uss) => uss._id == item.userId);
          return {
            name: `${us.lastName} ${us.firstName}`,
            avata: us.avataPicture,
            title: item.title,
            img: item.img,
            like: item.like,
            comment: item.comment,
            share: item.share,
          };
        });
        res.status(200).json(arr);
      }
    } catch (error) {
      console.log("Loi get postAll");
    }
  }

  async upPost(req, res) {
    try {
      
      const { title } = req.body;
      const imagePath = req.file.path;
      await Post.create({
        userId: req.params.id,
        title: title,
        img: imagePath,
      });
      return res.status(200).json({ messenger: "Thanh cong" });
    } catch (error) {
      return res.status(500).json({ messenger: "that bai" });
    } 
  }
  
}

module.exports = new PostController();
