const router = require('express').Router();
const { Post } = require('../../models');
const { Comment } = require('../../models');

router.get('/:id', async (req, res) => {

let postWithComments = await Post.findOne({
    where: { id: req.params.id },
    include: [{
        model: Comment,
        required: false,
        where: {
            post_id: req.params.id
        }
    }] 
     });

const post = postWithComments.get({plain: true});
console.log(post);

res.render('viewpost', {post})

});

router.post('/newPost', async (req, res) => {

    let newPost = await Post.create(
       { title: req.body.title, content: req.body.content, user_id: req.session.user_id },
                 );
    
    const posty = newPost.get({plain: true});
    console.log(posty);
    
    res.send('ok');
    
    });



module.exports = router;