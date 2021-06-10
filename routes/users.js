const express = require("express");
const path = require("path");
const router = express.Router ();
const multer = require('multer'); 
const { body } = require('express-validator');
const session = require('express-session')

const usersController = require('../controllers/usersController');
const validations = require('../middlewares/validations');
const uploadFile = require('../middlewares/multerMiddleware'); 


const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');


//router.get('/:idUsers', usersController.usuario);

//Formulario de Registro:

router.get('/register', guest, usersController.register);

//Procesar el registro:

router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
//avatar en el form 'avatar'

//Formulario de login
router.get('/login', guest, usersController.login); 

//Procesar el login
router.post('/login', usersController.loginProcess); 

//Cerrar sesión
router.get('/logout', usersController.logout); 

//Perfil del usuario
router.get('/profile', auth, usersController.profile); 

//Formulario de edición de usuarios
router.get('/:id/edit', validations, usersController.edit); // puede ser edith/id cuidado de no solaparse

//Acción de edición (a donde se envía el formulario):
router.put('/:id/put', uploadFile.single('avatar'), validations, usersController.update); 

//Eliminar usuario
router.delete('/profile/delete', usersController.deleteUserById); 



module.exports = router;