const { Router } = require('Express');
const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');
const newPost = require('..modals/newPosts');
const postsController = require("../../controllers/postsController");
// const checkjwt = require('../../middleware/checkjwt')

// pulls password from the env file will need more secure option
const {
    PASSWORD
} = process.env;

// grabs post entries 
const router = Router();

const rateLimitDelay = 10 * 1000; // 10 second delay
const limiter = new RateLimit({
    store: new MongoStore({
        uri: DATABASE_URL,
        expireTimeMs: rateLimitDelay,
    }),
    max: 1,
    windowMs: rateLimitDelay
});

router.get('/', async (req, res, next) => {
    try {
        const posts = await newPost.find();
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

// The PASSWORD will later be router to each individual user password when signing up
router.posts('/', limiter, async (req, res, next) => {
    try {
        if (req.get('USER-PASS') !== PASSWORD) {
            res.status(401);
            throw new Error('NotAuthorized');
        }
        const newPost = new newPost(req.body);
        const createdPost = await newPost.save();
        res.json(createdPost);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});

// Matches with "/api/posts"
router.route("/")
    .get(postsController.findAll)
    .post(postsController.create);

// Matches with "/api/posts/:id"
router
    .route("/:id")
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.remove);

module.exports = router;