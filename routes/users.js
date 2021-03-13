const express = require ("express");
const usersController = require ('../controllers/usersController');
const path = require ("path");
const router = express.Router ();
const multer = require('multer'); 
const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre completo'),
    body('user').notEmpty().withMessage('Tienes que escribir tu nombre de usuario'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir tu e-mail').bail() //si tengo un error para no empty no sigo, detiene las val.
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
        //express-validator están las validaciones.- (library)
    body('birth_date').notEmpty().withMessage('Tienes que ingresa tu fecha de nacimiento'),
    body('address').notEmpty().withMessage('Tienes que escribir tu domicilio'),
    body('country').notEmpty().withMessage('Tienes que ingresar tu país'),
    body('pass').notEmpty().withMessage('Tienes que elegir una contraseña'),
    body('avatar').custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
       
        if (!file) {
            throw new Error ('Tienes que subir una imagen')
        }
        else {
            let fileExtension = path.extname(file.originalname); 
            if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
            }
        }
        return true; 
    })
    //no hay validacioens específicas para este campo
];


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./public/img/avatar');
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`; 
        cb(null, fileName )
    }

});
const uploadFile = multer({storage});

//router.get('/:idUsers', usersController.usuario);

//Formulario de Registro:

router.get('/register', usersController.register);

//Procesar el registro:

router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
//avatar en el form 'avatar'


module.exports = router;