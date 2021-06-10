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

      //Un producto pertenece a una categoria
      this.belongsTo(models.Categories,{
        as: 'Categoria',
        foreignKey: 'idCategory'
      });

      //Un producto pertenece a una sección
      this.belongsTo(models.Sections,{
          as: 'Seccion',
          foreignKey: 'idSection'
      });

      //Un producto pertenece a una tienda
      this.belongsTo(models.Tienda,{
        as: 'Tienda',
        foreignKey: 'idTienda'
    });

      //Un producto pertenece a muchas ordenes de compra
      this.belongsToMany(models.Orders, { 
        through: 'OrderProducts',
        foreignKey: 'idProducts',
        otherKey: 'idOrders',
        timestamps: false
    })
      
    }

  };
  Products.init({
    idProducts: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    seller: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    stock: DataTypes.INTEGER,
    payment: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    shipping: DataTypes.DECIMAL(10,2),
    discount: DataTypes.DECIMAL(10,2),
    idCategory: DataTypes.INTEGER,
    idSection: DataTypes.INTEGER,
    idTienda: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: false
  });
  return Products;
};