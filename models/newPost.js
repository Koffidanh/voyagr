const mongoose = require("mongoose");
const { Schema } = mongoose;

const requiredNumber = { type: Number, required: true, };

const newPostSchema = new Schema({
  title: { type: String },
  description: String,
  image: [{ type: String }],
  latitude: { type: Number, min: -90, max: 90, },
  longitude: { type: Number, min: -180, max: 180, },
  visitDate: { type: Date, },
  userID: { type: String },
  date: { type: String },
  timestamp: { type: String }
});

const NewPost = mongoose.model('NewPost', newPostSchema);

module.exports = NewPost;