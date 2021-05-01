'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders.init({
    idOrders: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    date: DataTypes.STRING,
    status: DataTypes.STRING,
    Users_idUsers: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};