const express = require('express');
const path = require('path');
const session = require('express-session'); 
const userLoggedM = require('./middlewares/userLoggedM'); 
const app = express(); 


// ************ Require's ************
const createError = require('http-errors');
//const cookieParser = require('cookie-parser');
//const logger = require('morgan');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

//routes
const routesMain = require ('./routes/main.js');
const routesProduct = require ('./routes/product.js');
const routesCart = require ('./routes/productCart.js');
const routesUsers = require ('./routes/users.js');

//temporal
//const routesProductDetail = require ('./routes/productDetail.js');
//const routesProductCart = require ('./routes/productCart.js');
//const routesRegister = require ('./routes/register.js');
//const routesLogin = require ('./routes/login.js')
//const routesProductCreator = require ('./routes/productCreator.js')
//routes

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
//app.use(logger('dev'));
app.use(express.json());
//app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(session({
    secret: 'Its a secret',
    resave: false,
    saveUninitialized: false,

})); 

app.use(userLoggedM); //va después de inicializar sesión, porque se tiene que iniciar la sesión primero


//console.log (express)
//console.log (path)
//console.log (app)

app.use(express.static("public"));

//routes
app.use ('/', routesMain);
app.use ('/product', routesProduct);
app.use ('/productCart', routesCart);
app.use ('/users',  routesUsers);


//temporal
//app.use ('/productDetail', routesProductDetail);
//app.use ('/productCart', routesProductCart);
//app.use ('/login', routesLogin);
//app.use ('/register', routesRegister);
//app.use ('/productCreator', routesProductCreator);
//routes

app.listen (8000, () => {
    console.log ("Levantando un servidor con Express: Puerto 8000")
});

//app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(path.resolve('./views/index.html'));
    //otra forma: console.log(path.join(__dirname, '/public/hola.html'))
    //console.log("A: "+__dirname+"/views/index.html")
    //console.log("B: /Users/cfpons/Desktop/Liebre/views/index.html")
//});
//app.get('/productDetail', (req,res) => {
    //res.sendFile(path.resolve('./views/productDetail.html'));
//})

//app.get('/productCart', (req,res) => {
    //res.sendFile(path.resolve('./views/productCart.html'));
//})


//app.get('/register', (req,res) => {
    //res.sendFile(path.resolve('./views/register.html'));
//})


//app.get('/login', (req,res) => {
    //res.sendFile(path.resolve('./views/login.html'));
//})

//app.get('/404', (req, res) => {
      //res.send("Error página no encontrada", 404);
    //console.log ();
//});
