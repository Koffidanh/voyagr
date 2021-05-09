const router = require("express").Router();
const passport = require("passport")




router.use("/login", passport.authenticate("local"))



// const postRoutes = require("./posts");

// // Post routes
// router.use("/posts", postRoutes);

module.exports = router;