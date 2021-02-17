const express = require ("express");
const productController = require ('../controllers/productController');
const path = require ("path");
const router = express.Router ();

router.get('/:idProduct', productController.detalle)

module.exports = router;