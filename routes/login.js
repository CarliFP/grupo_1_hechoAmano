const express = require ("express");
const loginController = require ('../controllers/loginController');
const path = require ("path");
const router = express.Router ();

router.get('/', loginController.login)

module.exports = router;