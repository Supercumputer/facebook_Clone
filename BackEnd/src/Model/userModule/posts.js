const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  userId: { type: String },
  title: { type: String, default: "" },
  img: { type: String, default: "" },
  like: { type: Number, default: 0 },
  comment: { type: Number, default: 0 },
  share: { type: Number, default: 0 },
});

module.exports = mongoose.model("post", Post);
