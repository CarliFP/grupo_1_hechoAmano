module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoriesUsers';
    let cols = {
        idCategoriesUsers: {
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

    const CategoriesUsers = sequelize.define(alias, cols, config); 
 
    return CategoriesUsers
};

