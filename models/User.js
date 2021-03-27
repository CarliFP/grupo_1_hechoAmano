// Guardar al usuario en la DB 
//Buscar al usuario que se quiere loguear por su email
//Traer un usuario a través de su ID
//Editar la información de un usuario
//Eliminar a un usuario de la DB
//CRUD (Create, read, update, delete)
const path = require('path');
const fs = require('fs'); 

const User =  {
    //crear usuario
    fileName: './data/usuariosJason.json', //esto es el filename nombre del archivo con su ubicación

    //lectura del archivo JSON.parse: lo convierte en array
    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')); 
    },

    //buscar todos los usuarios
    findAll: function () {
        return this.getData(); 
    },

    //generar Id para que guarde usuario con id.-
    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop(); //busca el último id y le suma uno
        if (lastUser) {
            return lastUser.id + 1;
        }
            return 1; //para el caso que no haya ningún usuario se usa el if para que inicie en 1
    },

    //buscar un usuario por ID //Primary Key (PK)
    findByPk: function (id) {
        let allUsers = this.findAll(); 
        let userFound = allUsers.find(oneUser => oneUser.id === id); //itera array de usuario y ver si es igual al id buscado
        return userFound; 
    },

     //buscar un usuario por campo del form
     //trae el primero que se encuentre
     findByField: function (field, text) {
        let allUsers = this.findAll(); 
        let userFound = allUsers.find(oneUser => oneUser[field] === text); //itera array de usuario y ver si es igual al id buscado
        return userFound; 
    },

    //crear un usuario
    create: function (userData) {

        let allUsers = this.findAll();
        //para que genere el id porque es lo único que no viene generado por el usuario.

        let newUser = {
            id: this.generateId(),
            ...userData  //toda la info que llega del objeto literal
        }

        allUsers.push(newUser); //array pasarlo a jason para guardarlo

        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' ')) //filename donde guarda ya esta arriba, lo convierte y lo guarda.
        return newUser; 
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id); 
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        res.redirect('/'); 
    },

}

module.exports = User; 

//PRUEBAS: 
//con console log ejecutando models/User.js en consola voy probando.
//console.log(User.findByPk(2)); 
//console.log(User.findByField('email', 'neri1412@hotmail.com')) 
//permiso denegado?
//console.log(User.create({fullName: 'Prueba conon id', email: 'car@dh.com'})) //debería devolver true
//console.log(User.generateId()); 
//console.log(User.delete(5)); 