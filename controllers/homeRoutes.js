const router = require('express').Router();
const { User, Post } = require('../models');
const auth = require ('../utils/auth');

router.get('/', async (req, res) => {

    const allPosts = await Post.findAll().catch((err) => {
        
        res.json(err);
    });
     const posts = allPosts.map((post) => post.get({plain: true}));
     console.log(posts);

      res.render('homepage', {posts});
      
 });

 router.get('/dashboard', auth, async (req, res) => {
    res.render('dashboard');
});

 router.get('/login', async (req, res) => {
  
    res.render('login');
});

router.get('/create', (req, res)=> {
res.render('create');
});

router.get('/viewpost', (req, res)=> {
res.render('viewpost')
});


module.exports = router;