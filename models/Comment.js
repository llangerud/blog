const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    content:
    {
      type: DataTypes.STRING,
      allowNull: false

    },
    user_comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;