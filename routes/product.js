const express = require ("express");
const productController = require ('../controllers/productController');
const path = require ("path");
const router = express.Router ();

router.get('/productCreator', productController.creator);

//router.get('/productCart', productController.cart);

router.get('/productDetail', productController.detail);

router.get('/:idProduct', productController.detalle);

module.exports = router;