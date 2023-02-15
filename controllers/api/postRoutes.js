const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
const { Comment } = require('../../models');


router.get('/:id', async (req, res) => {
    
    let getUsername = await Post.findOne({
    where: { id: req.params.id }
    });

    const userid = getUsername.user_id;
    console.log(userid);

    let postWithComments = await Post.findOne({
        where: { id: req.params.id },
        include: [
            {
                model: User,
                attributes: ['user_name']
              },
            {
            model: Comment,
            required: false,
            // where: {
            //     post_id: req.params.id
            // },
            include:[
                {
                 model: User,
            required: false,
            attributes:['user_name']
                }
            ]
            
        }]
         });
    
    
    const post = postWithComments.get({plain: true});
    console.log(post);
    console.log(post.comments);
    
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
    router.put('/edit/update/:id', async (req, res) => {

        await Post.update({title: req.body.title, content: req.body.content},{
            where: { id: req.params.id },
            
             });
             res.status(200).json({message: 'updated'}); 
        });
        //deletes the selected post
        router.delete('/edit/delete/:id', async (req, res) => {

           await Post.destroy({
                where: { id: req.params.id },
                
                 });
             res.render('dashboard');           
            });




   


module.exports = router;