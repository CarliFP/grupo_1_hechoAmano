const express = require ("express");
const registerController = require ('../controllers/registerController');
const path = require ("path");
const router = express.Router ();

router.get('/', registerController.register)

module.exports = router;