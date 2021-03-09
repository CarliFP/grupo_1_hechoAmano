// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path'); 
const multer = require('multer'); 

// ************ Controller Require ************
const productController = require('../controllers/productController');

//**************** MULTER **********************************//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/img');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
}); 

// Listado de productos
router.get('/', productController.index); 

//Detalle de un producto particular
router.get('/:id/detail', productController.detail); 

//Formulario de creación de productos
router.get('/create', productController.create); 

//Acción de creación (a donde se envía el formulario)
const uploadFile = multer({storage: storage}); //aquí se almacena la ejecución

router.post('/', uploadFile.single('image'), productController.store);
//en el medio va el nombre name dado en el formulario 

//Formulario de edición de productos
router.get('/:id/edit', productController.edit); // puede ser edith/id cuidado de no solaparse

//Acción de edición (a donde se envía el formulario):
router.put('/:id/put', productController.update); 

//Acción de borrado
router.delete('/:id/delete', productController.destroy); 


//router.get('/productCreator', productController.creator);

//router.get('/productCart', productController.cart);

//router.get('/productDetail', productController.detail);

//router.get('/:idProduct', productController.detalle);

module.exports = router;