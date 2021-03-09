const express = require ("express");
const mainController = require ('../controllers/mainController');
const path = require ("path");
const router = express.Router ();

router.get('/', mainController.index);

router.get('/search', mainController.search);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/product', mainController.todos);

router.get('/listEdit', mainController.todos);


/*CATEGORIAS*/ 
router.get('/accesorios', mainController.accesorios);

router.get('/arte', mainController.arte);

router.get('/hogar', mainController.hogar);

router.get('/juegos', mainController.juegos);

router.get('/cosmetica', mainController.cosmetica);

router.get('/vestimenta', mainController.vestimenta);

/*NOT FOUND*/ 

router.get('/404', mainController.notFound);



module.exports = router;
