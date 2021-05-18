const mongoose = require("mongoose");
const { Schema }  = mongoose;

const requiredNumber = { type: Number, required: true, };

const newPostsSchema = new Schema({
    title: { type: String, required: true, },
    description: String,
    comments: String,
    image: String,
    latitude: { ...requiredNumber, min: -90, max: 90, },
    longitude: { ...requiredNumber, min: -180, max: 180, },
    visitDate: { required: true, type: Date, },
    // timestamp: { required: true, default: Date.now }
  });
  
  const Posts = mongoose.model('Posts', newPostsSchema);


module.exports = Posts;
