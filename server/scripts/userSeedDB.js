
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/users"
);

const newUserSeed = [{
  userName: "User007",
  avatarImage: "",
  email: "user007@gmail.com",
  password: "12345"

}];



db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(newUserSeed))
  .then(data => {
    console.log(data.result.n);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });