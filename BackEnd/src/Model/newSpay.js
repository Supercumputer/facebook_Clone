const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSpay = new Schema({
  userId: { type: String },
  img: { type: String, default: '' },
  like: { type: Number },
  comment: { type: Number },
  share: { type: Number },
});

module.exports = mongoose.model("newSpay", newSpay);
