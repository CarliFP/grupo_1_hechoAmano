// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path'); 
const multer = require('multer'); 
const fs = require('fs');

const { body } = require('express-validator'); 
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre del producto'),
    body('seller').notEmpty().withMessage('Tienes que escribir tu nombre de vendedor'),
    body('price').notEmpty().withMessage('Tienes que ingresar un precio'),
    body('stock').notEmpty().withMessage('Tienes que ingresar el stock'),
    body('shipping').notEmpty().withMessage('Tienes que ingresar el costo de envio'),
    body('payment').notEmpty().withMessage('Tienes que ingresar la cantidad de cuotas'),
    body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
    body('section').notEmpty().withMessage('Tienes que elegir la seccion'),
    body('image').custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
       
        if (!file) {
            throw new Error ('Tienes que subir una imagen')
        }
        else {
            let fileExtension = path.extname(file.originalname); 
            if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true; 
    })
    //no hay validacioens específicas para este campo
];

// ************ Controller Require ************
const productController = require('../controllers/productController');

//**************** MULTER **********************************//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/img');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
}); 

const upload = multer({storage: storage}); //aquí se almacena la ejecución

const auth = require('../middlewares/auth');


// Listado de productos
router.get('/', productController.index);

//Detalle de un producto particular
router.get('/:id/detail', productController.detail); 

//Formulario de creación de productos
router.get('/create', auth, productController.create); 

//Acción de creación (a donde se envía el formulario)
router.post('/', upload.single('image'), validations, productController.store);
//en el medio va el nombre name dado en el formulario 

//Formulario de edición de productos
router.get('/:id/edit', productController.edit); // puede ser edith/id cuidado de no solaparse

//Acción de edición (a donde se envía el formulario):
router.put('/:id/put', upload.single('image'), validations, productController.update); 

//Acción de borrado
router.delete('/:id/delete', productController.destroy); 


module.exports = router;