const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Video = new Schema({
    userId: { type: String },
    title: { type: String, default: '' },
    video: { type: String, require: true, default: '' },
    like: { type: Number },
    comment: { type: Number },
    share: { type: Number },
});

module.exports = mongoose.model('video', Video);