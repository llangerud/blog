const { User } = require('../models/index');

const userData = [
  {
    user_name: 'Bob',
    user_email: 'email@email.com',
  },
  {
    user_name: 'Shirley',
    user_email: 'email@email.com',
  },
  {
    user_name: 'Travis',
    user_email: 'email@email.com',
  },
  {
    user_name: 'Akon',
    user_email: 'email@email.com',
  },
  {
    user_name: 'Karen',
    user_email: 'email@email.com',
  },
];

const seedUsers = () => User.bulkCreate(userData);



module.exports = seedUsers;
