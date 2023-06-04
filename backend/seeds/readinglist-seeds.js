const { ReadingList } = require('../models');

const readingListData = [
  {
    user_id: 1,
    book_title: "The Hunger Games",
  },
  {
    user_id: 1,
    book_title: "Dune",
  },
  {
    user_id: 2,
    book_title: "Lord of the Flies",
  },
];

const seedReadingLists = () => ReadingList.bulkCreate(readingListData);

module.exports = seedReadingLists;
