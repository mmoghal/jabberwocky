const seedUsers = require('./user-seeds');
const seedBooks = require('./book-seeds');
const seedReadingLists = require('./readinglist-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBooks();
  console.log('\n----- BOOKS SEEDED -----\n');

  await seedReadingLists();
  console.log('\n----- READING LISTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
