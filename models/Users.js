module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        idProduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
        email: dataTypes.STRING,
        birth_date: dataTypes.DATE,
        address: dataTypes.STRING,
        image: dataTypes.STRING,
        pass: dataTypes.STRING,
        user: dataTypes.STRING,
        idTypeUser: dataTypes.INTEGER,
        idCountry: dataTypes.INTEGER,
        idInterests: dataTypes.INTEGER,

    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Users = sequelize.define(alias, cols, config); 

    //ASOCIACIONES
    Users.associate = function(models){     
    
       //Un usuario pertenece a un tipo de Usuario
       Users.belongsTo(models.TypeUser,{
            as: 'TipoDeUsuario',
            foreignKey: 'idTypeUser'
        });

        //Un usuario tiene muchas categorías de interés.
        Users.hasMany(models.Categories,{
            as: 'Intereses',
            foreignKey: 'idInterests'
        });

    };
 
    return Users
};

