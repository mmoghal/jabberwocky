const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReadingList extends Model {}

ReadingList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    book_review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book_review',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'reading_list',
  }
);

module.exports = ReadingList;
