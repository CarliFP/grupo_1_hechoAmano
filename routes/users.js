const express = require ("express");
const usersController = require ('../controllers/usersController');
const path = require ("path");
const router = express.Router ();

router.get('/:idUsers', usersController.usuario);

module.exports = router;