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
     
      //Una orden pertenece a un usuario
      this.belongsTo(models.Users,{
        as: 'Usuario',
        foreignKey: 'Users_idUsers'
    });

     //Una orden tiene muchos productos -> muchos a muchos con Products 
     this.belongsToMany(models.Products, { 
      through: 'OrderProducts',
      foreignKey: 'idProducts',
      otherKey: 'idOrders',
      timestamps: false
  })

    }

  };
  Orders.init({
    idUser: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    Users_idUsers: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};