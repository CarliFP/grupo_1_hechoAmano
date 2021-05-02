module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        idProducts: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
        seller: dataTypes.STRING,
        price: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        payment: dataTypes.INTEGER,
        image: dataTypes.STRING,
        description: dataTypes.STRING,
        shipping: dataTypes.INTEGER,
        discount: dataTypes.INTEGER,
        idCategory: dataTypes.INTEGER,
        idSection: dataTypes.INTEGER,

    }

    let config = {
        tableName: "products",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Products = sequelize.define(alias, cols, config); 

    //ASOCIACIONES
    Products.associate = function(models){     
    
       //Un producto pertenece a una categoria
       Products.belongsTo(models.Categories,{
            as: 'Categoria',
            foreignKey: 'idCategory'
        });

        //Un producto pertenece a una sección
        Products.belongsTo(models.Sections,{
            as: 'Seccion',
            foreignKey: 'idSection'
        });


 
    return Products
};

}