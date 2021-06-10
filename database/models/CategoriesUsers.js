module.exports = (sequelize, DataTypes) => {
    let alias = 'CategoriesUsers';
    let cols = {
        idCategoriesUsers: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: DataTypes.STRING,
    }

    let config = {
        timestamps: true,
        // createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const CategoriesUsers = sequelize.define(alias, cols, config); 
 
    return CategoriesUsers
};

