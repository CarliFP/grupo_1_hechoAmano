'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        //Un categoría de interés tiene muchos usuarios 
      this.belongsToMany(models.Users, { 
        through: 'CategoriesUsers',
        foreignKey: 'idUsers',
        otherKey: 'idCategories',
        timestamps: false
    })
    }
  };
  Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};