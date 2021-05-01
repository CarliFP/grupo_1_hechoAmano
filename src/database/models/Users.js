'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    idUsers: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    address: DataTypes.STRING,
    avatar: DataTypes.STRING,
    user: DataTypes.STRING,
    idTypeUser: DataTypes.INTEGER,
    idCountry: DataTypes.INTEGER,
    pass: DataTypes.STRING,
    Tienda_idTienda: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};