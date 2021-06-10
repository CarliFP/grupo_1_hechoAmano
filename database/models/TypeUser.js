module.exports = (sequelize, dataTypes) => {
    let alias = 'TypeUser';
    let cols = {
        idTypeUser: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
    }

    let config = {
        timestamps: true,
        // createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const TypeUser = sequelize.define(alias, cols, config); 
 
    return TypeUser
};

