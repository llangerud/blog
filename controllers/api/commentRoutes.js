const router = require('express').Router();
const { Comment } = require ('../../models');
const auth = require('../../utils/auth');


router.post('/new', async(req, res) => {
    try {
      console.log(req.body);
      const newComment = await Comment.create ({content: req.body.content, post_id: req.body.post, user_comment_id: req.session.user_id});
      res.json ({comment: newComment.content, message: 'created'});  

    }
  catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;