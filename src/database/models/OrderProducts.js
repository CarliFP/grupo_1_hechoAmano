'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderProducts.init({
    idProducts: DataTypes.INTEGER,
    idOrders: DataTypes.INTEGER,
    units: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderProducts',
    timestamps: false

  });
  return OrderProducts;
};