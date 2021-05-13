const { Router } = require('Express');
const newPost = require('..modals/newPosts');

// pulls password from the env file will need more secure option
const {
    PASSWORD
} = process.env;

// grabs post entries 
const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const posts = await newPosts.find();
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

router.posts('/', limiter, async (req, res, next) => {
    try {
        if (req.get('USER-PASS') !== PASSWORD) {
            res.status(401);
            throw new Error('NotAuthorized');
        }
        const newPosts = new newPosts(req.body);
        const createdPosts = await newPosts.save();
        res.json(createdPosts);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});

module.exports = router;