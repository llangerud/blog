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




module.exports = router;