const express = require ("express");
const mainController = require ('../controllers/mainController');
const path = require ("path");
const usersController = require("../controllers/usersController");
const router = express.Router ();

router.get('/', mainController.index);

router.get('/search', mainController.search);

router.get('/product', mainController.todos);

router.get('/listEdit', mainController.todos);

router.get('/mediosDePago', mainController.mediosDePago);


/*CATEGORIAS*/ 

router.get('/vestimenta', mainController.vestimenta);

router.get('/accesorios', mainController.accesorios);

router.get('/arte', mainController.arte);

router.get('/hogar', mainController.hogar);

router.get('/juegos', mainController.juegos);

router.get('/cosmetica', mainController.cosmetica);

/*NOT FOUND*/ 

router.get('/404', mainController.notFound);



module.exports = router;
