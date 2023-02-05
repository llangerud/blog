const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const User = require('./User');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title:
    {
      type: DataTypes.STRING,
      allowNull: false

    },
    content:
    {
      type: DataTypes.STRING,
      allowNull: false

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;