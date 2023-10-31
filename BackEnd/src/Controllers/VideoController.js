const User = require("../Model/users");
const Video = require("../Model/videos");

class VideoController {
  async showAllVideo(req, res) {}

  async getAllVideo(req, res) {
    try {
      let duse = await User.find({});
      let data = await Video.find({});

      if (duse && data) {
        let arr = data.map((video) => {
          let us = duse.find((itm) => itm._id == video.userId);

          return {
            title: video.title,
            id: video._id,
            video: video.video,
            like: video.like,
            comment: video.comment,
            share: video.share,
            avata: us.avataPicture,
            name: `${us.lastName} ${us.firstName}`,
          };
        });

        res.status(200).json(arr);
      }
    } catch (error) {}
  }
}

module.exports = new VideoController();
