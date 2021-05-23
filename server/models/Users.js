const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  avatarImage: {
    data: Buffer,
    contentType: String,

  },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;