module.exports = (sequelize, DataTypes) => {
    let alias = 'Countries';
    let cols = {
        idCountries: {
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

    const Countries = sequelize.define(alias, cols, config); 
 
    return Countries
};

