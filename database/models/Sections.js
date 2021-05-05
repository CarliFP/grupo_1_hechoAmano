module.exports = (sequelize, dataTypes) => {
    let alias = 'Sections';
    let cols = {
        idSections: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
    }

    let config = {
        timestamps: false,
        deletedAt: false
    }

    const Sections = sequelize.define(alias, cols, config); 
 
    return Sections
};

