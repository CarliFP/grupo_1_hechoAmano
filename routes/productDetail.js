const express = require ("express");
const productDetailController = require ('../controllers/productDetailController');
const path = require ("path");
const router = express.Router ();

router.get('/', productDetailController.detail)

module.exports = router;