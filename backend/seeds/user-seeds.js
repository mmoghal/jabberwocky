const { User } = require('../models');

const userData = [
  {
    username: 'johnDoe',
    email: 'johndoe@example.com',
    password: 'password123'
  },
  {
    username: 'janeDoe',
    email: 'janedoe@example.com',
    password: 'password123'
  },
  {
    username: 'billSmith',
    email: 'billsmith@example.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
