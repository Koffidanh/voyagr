const mongoose = require("mongoose");
const { Schema } = mongoose;

const requiredNumber = { type: Number, required: true, };

const newPostsSchema = new Schema({
  title: { type: String },
  description: String,
  comments: String,
  image: String,
  latitude: { type: Number, min: -90, max: 90, },
  longitude: { type: Number, min: -180, max: 180, },
  visitDate: { type: Date, },
  // timestamp: { required: true, default: Date.now }
});

const Posts = mongoose.model('Posts', newPostsSchema);


module.exports = Posts;