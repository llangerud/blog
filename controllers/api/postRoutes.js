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

     //displays the post the user clicked so they can edit it
        router.get('/edit/:id', async (req, res) => {

            let postEdit = await Post.findOne({
                where: { id: req.params.id },
                 });
            
            const post = postEdit.get({plain: true});
            
            res.render('editordeletepost', {post})
            
            });

    //updates the selected post
    router.put('/edit/update/:id', (req, res) => {

        Post.update({title: req.body.title, content: req.body.content},{
            where: { id: req.params.id },
            
             });
        
        });
        //deletes the selected post
        router.delete('/edit/delete/:id', (req, res) => {

             Post.destroy({
                where: { id: req.params.id },
                
                 });
                        
            });




   


module.exports = router;