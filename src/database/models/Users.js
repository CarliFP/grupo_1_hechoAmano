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
      //Un usuario pertenece a una tienda
      this.belongsTo(models.Tienda,{
        as: 'Tienda',
        foreignKey: 'Tienda_idTienda'
      });

      //Un usuario pertenece a un tipo de usuario
      this.belongsTo(models.TypeUsers,{
          as: 'TypeUsers',
          foreignKey: 'idTypeUser'
      });

      //Un usuario pertenece a un país
      this.belongsTo(models.Countries,{
        as: 'Countries',
        foreignKey: 'idCountry'
    });


      //Un usuario tiene muchas categorias de interes
      this.belongsToMany(models.Categories, { 
        through: 'CategoriesUsers',
        foreignKey: 'idUsers',
        otherKey: 'idCategories',
        timestamps: false
    })
      
    }

    }
  Users.init({
    idUsers: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    timestamps: false
  });
  return Users;
};