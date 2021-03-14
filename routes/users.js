const express = require("express");
const path = require("path");
const router = express.Router ();
const multer = require('multer'); 
const { body } = require('express-validator');

const usersController = require('../controllers/usersController');
const validations = require('../middlewares/validations');
const uploadFile = require('../middlewares/multerMiddleware'); 

//router.get('/:idUsers', usersController.usuario);

//Formulario de Registro:

router.get('/register', usersController.register);

//Procesar el registro:

router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
//avatar en el form 'avatar'


//Formulario de login
router.get('/login', usersController.login);  

//Procesar el login
router.post('/login', usersController.loginProcess); 


//Perfil del usuario
router.get('/:id/profile/', usersController.profile); 

module.exports = router;