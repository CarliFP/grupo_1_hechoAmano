const express = require ("express");
const productCart = require ('../controllers/productCartController');
const path = require ("path");
const router = express.Router ();

router.get('/', productCart.cart);

module.exports = router;