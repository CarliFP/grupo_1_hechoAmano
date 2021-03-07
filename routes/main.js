const express = require ("express");
const mainController = require ('../controllers/mainController');
const path = require ("path");
const router = express.Router ();

router.get('/', mainController.index);

router.get('/search', mainController.search);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/404', mainController.notFound);

module.exports = router;
