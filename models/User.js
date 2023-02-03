const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_name:
    {
      type: DataTypes.STRING,
      allowNull: false

    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;