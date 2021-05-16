const router = require("express").Router();
// const passport = require("passport")
// const User = require('../../users')
// const bcrypt = require("bcrypt");
const checkjwt = require('../../middleware/checkjwt')

// router.post("/login", checkjwt, (req, res) => {
//     res.json(req.user)
// })

// router.post('/register', (req, res) => {
//     console.log("register success")
//     User.findOne({ email: req.body.email }, async (err, doc) => {
//         if (err) throw err;
//         if (doc) res.send("User Already Exists");
//         if (!doc) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10);

//             const newUser = new User({
//                 email: req.body.email,
//                 password: hashedPassword,
//             });
//             await newUser.save();
//             res.send("User Created");
//         }
//     });
// });

// router.get('/user', (req, res, next) => {
//     console.log('user:')
//     console.log(req.user)
//     if (req.user) {
//         res.json({ user: req.user })
//     } else {
//         res.json({ user: null })
//     }
// })

const postRoutes = require("./posts");

// Post routes
router.use("/posts", postRoutes);

module.exports = router;