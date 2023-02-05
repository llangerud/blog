const { Post } = require('../models');

const postData = [
  {
    content: 'Computers are bad',
    title: 'post one',
    user_id: 1,
  },
  {
    content: 'Computers are good',
    title: 'post two',
    user_id: 2,
  },
  {
    content: 'Help AI is replacing me',
    title: 'post three',
    user_id: 3,
  },
  {
    content: 'I am fine now. I am definitely not a robot',
    title: 'post four',
    user_id: 3,
  },
  {
    content: 'Can someone help me with this CAPTCHA please',
    title: 'post five',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
