const express = require ("express");
const path = require ("path");
const app = express(); 

//routes
const routesMain = require ('./routes/main.js');
const routesProduct = require ('./routes/product.js');
//temporal
const routesProductDetail = require ('./routes/productDetail.js');
const routesProductCart = require ('./routes/productCart.js');
const routesRegister = require ('./routes/register.js');
const routesLogin = require ('./routes/login.js')
const routesProductCreator = require ('./routes/productCreator.js')
//routes

app.set("view engine", "ejs");

//console.log (express)
//console.log (path)
//console.log (app)

app.use(express.static("public"));

app.listen (8000, () => {
    console.log ("Levantando un servidor con Express: Puerto 8000")
});

//routes
app.use ('/', routesMain);
app.use ('/product', routesProduct)
//temporal
app.use ('/productDetail', routesProductDetail);
app.use ('/productCart', routesProductCart);
app.use ('/login', routesLogin);
app.use ('/register', routesRegister);
app.use ('/productCreator', routesProductCreator);
//routes

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
