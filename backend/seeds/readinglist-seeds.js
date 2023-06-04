const { ReadingList } = require('../models');

const readingListData = [
  {
    user_id: 1,
    book_id: 1,
  },
  {
    user_id: 1,
    book_id: 2,
  },
  {
    user_id: 2,
    book_id: 3,
  },
];

const seedReadingLists = () => ReadingList.bulkCreate(readingListData);

module.exports = seedReadingLists;
