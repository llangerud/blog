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

router.get('/', auth, async (req, res) => {
try {
  let myComments = await Comment.findAll({
      where: { user_comment_id: req.session.user_id },
      
  });
           console.log(myComments);


  const comments = myComments.map((comment) => comment.get({plain: true}));

       console.log(comments);
       
       res.render('viewmycomments', {comments})
       }
       catch (error) {
        console.log(error);
       }
       });


router.get('/edit/:id', auth, async(req,res)=> {
  let comments = await Comment.findOne({
    where: { id: req.params.id },
     });

const comment = comments.get({plain: true});

res.render('editordeletecomment', {comment})


});



router.put('/edit/update/:id', auth, async(req, res) => {
  
    await Comment.update ({content: req.body.content}, {
      where: {id: req.params.id},
    });
    res.status(200).json({message: 'updated'});  
    });
    

 


router.delete('/edit/delete/:id', auth, async(req, res) => {
  try {
   await Comment.destroy ({ 
      where: { id: req.params.id },
    });
    res.json ({message: 'deleted'});  

  }
catch (err) {
  res.status(400).json(err);
}
res.render('/')
});



module.exports = router;