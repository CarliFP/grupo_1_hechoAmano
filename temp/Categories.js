module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';
    let cols = {
        idCategories: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Categories = sequelize.define(alias, cols, config); 
 
    return Categories
};

