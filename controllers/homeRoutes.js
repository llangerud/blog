const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    const allPosts = await Post.findAll().catch((err) => {
        res.json(err);
    });
    console.log(allPosts);
    const posts = allPosts.map((post) => post.get({plain: true}));
    res.render('homepage', {posts});
 });



module.exports = router;