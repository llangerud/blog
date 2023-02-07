const router = require('express').Router();
const { User, Post } = require('../models');
const auth = require ('../utils/auth');

router.get('/', async (req, res) => {
    const allPosts = await Post.findAll().catch((err) => {
        
        res.json(err);
    });
    
    const posts = allPosts.map((post) => post.get({plain: true}));
    res.render('homepage', {posts});

 });

 router.get('/dashboard', auth, async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }
    res.render('dashboard');
});



 router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

router.get('/create', (req, res)=> {
res.render('create');
});


module.exports = router;