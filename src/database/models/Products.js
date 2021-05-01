'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    idProducts: DataTypes.INTEGER,
    name: DataTypes.STRING,
    seller: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    payment: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    shipping: DataTypes.DECIMAL,
    discount: DataTypes.STRING,
    idCategory: DataTypes.INTEGER,
    idSection: DataTypes.INTEGER,
    idTienda: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};