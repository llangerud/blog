const router = require('express').Router();
const { Post } = require('../../models');

router.get('/:id', async (req, res) => {
const postData = await Post.findOne({ where: { id: req.params.id } });
console.log(postData);

const post = postData.get({plain: true});
console.log(post);
res.render('viewpost', {post})

});




module.exports = router;