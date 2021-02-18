const express = require ("express");
const productCartController = require ('../controllers/productCartController');
const path = require ("path");
const router = express.Router ();

router.get('/', productCartController.cart)

module.exports = router;