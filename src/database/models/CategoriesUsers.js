'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriesUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CategoriesUsers.init({
    idUsers: DataTypes.INTEGER,
    idCategories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoriesUsers',
  });
  return CategoriesUsers;
};