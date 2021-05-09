const router = require("express").Router();
const passport = require("passport")




router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user)
})



// const postRoutes = require("./posts");

// // Post routes
// router.use("/posts", postRoutes);

module.exports = router;