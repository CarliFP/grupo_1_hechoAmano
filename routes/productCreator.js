const express = require ("express");
const productCreator = require ('../controllers/productCreator');
const path = require ("path");
const router = express.Router ();

router.get('/', productCreator.detalle)

module.exports = router;