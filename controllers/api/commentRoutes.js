const router = require('express').Router();
const { Comment } = require ('../../models');
const auth = require('../../utils/auth');


router.post('/new', auth, async(req, res) => {
    try {
      const newComment = await Comment.create ({content: req.body.content, post_id: req.body.post, user_comment_id: req.session.user_id});
      res.json ({comment: newComment.content, message: 'created'});  

    }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {

  let myComments = await Comment.findAll({
      where: { user_comment_id: req.session.user_id },
      
  });
           console.log(myComments);


  const comments = myComments.get({plain: true});

       console.log(comments);
       
       res.render('viewmycomments', {comments})
       
       });



router.put('/edit/update/:id', auth, async(req, res) => {
  try {
    const updateComment = await Comment.update ({content: req.body.content});
    res.json ({comment: updateComment.content, message: 'created'});  

  }
catch (err) {
  res.status(400).json(err);
}
});
router.delete('/edit/delete/:id', auth, async(req, res) => {
  try {
    Comment.destroy ({ 
      where: { id: req.params.id },
    });
    res.json ({message: 'deleted'});  

  }
catch (err) {
  res.status(400).json(err);
}
});



module.exports = router;