const router = require('express').Router();
const {User, Post} = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {

    const allPosts = await Post.findAll().catch((err) => {

        res.json(err);
    });
    const posts = allPosts.map((post) => post.get({plain: true}));
    console.log(posts);

    res.render('homepage', {posts});

});


router.get('/dashboard', auth, async (req, res) => {
    const userPosts = await Post.findAll({
        where: {user_id:req.session.user_id}
    });
    console.log(userPosts);
    const posts = userPosts.map((post) => post.get({plain: true}));
    console.log(posts);

    res.render('dashboard', {posts});
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/newPost', (req,res) => {
    res.render('newpost');
});


module.exports = router;
