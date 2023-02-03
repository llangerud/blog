const { Comment } = require('../models');

const commentData = [
  {
    content: 'Some of my best friends are computers!',
    user_comment_id: 3,
    post_id: 1,
  },
  {
    content: 'A computer turned my family against me',
    user_comment_id: 2,
    post_id: 1,
  },
  {
    content: 'Get a side hustle, sleeping is for losers',
    user_comment_id: 5,
    post_id: 3,
  },
  {
    content: 'What does everyone think about politics?',
    user_comment_id: 4,
    post_id: 3,
  },
  {
    content: 'This one is a trick question - none of the images have pogo sticks',
    user_comment_id: 2,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
