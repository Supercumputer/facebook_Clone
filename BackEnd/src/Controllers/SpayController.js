const User = require("../Model/users");
const Post = require("../Model/posts");
const Spay = require("../Model/newSpay");

class SpayController {
  async getNewSpay(req, res) {
    try {
      let data = await User.find({});
      let spay = await Spay.find({});
      if (data && spay) {
        let obj = spay.map((sp, index) => {
          let da = data.find((itm) => itm._id == sp.userId);

          return {
            name: `${da.lastName} ${da.firstName}`,
            avata: da.avataPicture,
            img: sp.img,
          };
        });
        res.status(200).json(obj);
      }
    } catch (error) {
      console.log("Loi get spay");
    }
  }
}

module.exports = new SpayController();
