// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path'); 
const multer = require('multer'); 
const fs = require('fs'); 

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


// Listado de productos
router.get('/', productController.index); 
// Temps
router.get('/list', productController.list); 
// router.get('/crear', productController.crear);
router.get('/detalle/:id', productController.detalle);
router.post('/crear', productController.guardado);
router.get("/editar/:id", productController.editar);
router.post("/editar/:id", productController.actualizar);
router.post('/borrar/:id', productController.borrar);

//Detalle de un producto particular
router.get('/:id/detail', productController.detail); 

//Formulario de creación de productos
router.get('/create', productController.create); 

//Acción de creación (a donde se envía el formulario)
router.post('/', upload.single('image'), productController.store);
//en el medio va el nombre name dado en el formulario 

//Formulario de edición de productos
router.get('/:id/edit', productController.edit); // puede ser edith/id cuidado de no solaparse

//Acción de edición (a donde se envía el formulario):
router.put('/:id/put', upload.single('image'), productController.update); 

//Acción de borrado
router.delete('/:id/delete', productController.destroy); 


module.exports = router;