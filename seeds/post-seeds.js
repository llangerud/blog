const { Post } = require('../models');

const postData = [
  {
    content: 'Computers are bad',
    creator_id: 1,
  },
  {
    content: 'Computers are good',
    creator_id: 2,
  },
  {
    content: 'Help AI is replacing me',
    creator_id: 3,
  },
  {
    content: 'I am fine now. I am definitely not a robot',
    creator_id: 3,
  },
  {
    content: 'Can someone help me with this CAPTCHA please',
    creator_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
