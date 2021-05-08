const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sub extends Model { }

Sub.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    box_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beer_names: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sub',
  }
);

module.exports = Sub;
