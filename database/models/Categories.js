module.exports = (sequelize, DataTypes) => {
    let alias = 'Categories';
    let cols = {
        idCategories: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: DataTypes.STRING,
    }

    let config = {
        timestamps: false,
        deletedAt: false
    }

    const Categories = sequelize.define(alias, cols, config); 
 
    return Categories
};

