module.exports = (sequelize, dataTypes) => {
    let alias = 'Countries';
    let cols = {
        idCountries: {
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

    const Countries = sequelize.define(alias, cols, config); 
 
    return Countries
};

