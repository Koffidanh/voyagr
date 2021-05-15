const mongoose = require("mongoose");
const { Schema }  = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const newPostsSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    avatarImage: String,
    image: String,
  
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    timestamp: true, 
  });
  
  const newPosts = mongoose.model('newPosts', newPostsSchema);


module.exports = newPosts;
