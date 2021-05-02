module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        idUsers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
        email: dataTypes.STRING,
        birth_date: dataTypes.DATE,
        address: dataTypes.STRING,
        avatar: dataTypes.STRING,
        pass: dataTypes.STRING,
        user: dataTypes.STRING,
        idCountry: dataTypes.INTEGER,
        idInterests: dataTypes.INTEGER,
        idTypeUser: dataTypes.INTEGER
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
    
       //Un usuario pertenece a un tipo de Usuario ->Users
       Users.belongsTo(models.TypeUser,{
            as: 'TypeUsers',
            foreignKey: 'idTypeUser'
        });

        //Un usuario pertenece a un país. -> Countries
        Users.belongsTo(models.Countries,{
            as: 'Countries',
            foreignKey: 'idCountry'
        });

        //Un usuario puede tener muchas categorías de interés ->Categories
        Users.associate = function(models){     
            Users.belongsToMany(models.Categories,{
                as:'Intereses',
                through:'CategoriesUsers',
                foreingKey:'idUsers',
                otherKey:'idCategories',
                timestamps:false
            });

        }

    //Un Usuario puede tener muchas tiendas -> Tienda_ProductsUsers
        Users.associate = function(models){     
            Users.belongsToMany(models.Tienda_ProductsUsers,{
                as:'Tiendas',
                through:'Tiendas_ProductsUsers',
                foreingKey:'idProducts',
                otherKey:'idUsers',
                timestamps:false
            });
    }



    return Users
    };
  }   

