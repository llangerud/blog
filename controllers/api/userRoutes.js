const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json('Wrong email or password, please try again');
        return;
      }
  
      const passwordMatch = await userData.checkPw(req.body.password);
      if (!passwordMatch) {
        res
          .status(400)
          .json({ message: 'Wrong email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'logged in'});
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.post('/create',  async (req, res) => {
    try {
      console.log(req.body.email);
      const newUser = await User.create ({user_name: req.body.username, email: req.body.email, password: req.body.password});
      res.json ({user: newUser.user_name, message: 'created'});
    }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;