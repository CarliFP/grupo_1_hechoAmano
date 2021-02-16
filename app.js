const express = require ("express");
const path = require ("path");
const app = express(); 

app.set("view engine", "ejs");

//console.log (express)
//console.log (path)
//console.log (app)

app.use(express.static("public"));

app.listen (8000, () => {
    console.log ("Levantando un servidor con Express: Puerto 8000")
});

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    res.sendFile(path.resolve('./views/index.html'));
    //otra forma: console.log(path.join(__dirname, '/public/hola.html'))
    //console.log("A: "+__dirname+"/views/index.html")
    //console.log("B: /Users/cfpons/Desktop/Liebre/views/index.html")
});
app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve('./views/productDetail.html'));
})

app.get('/productCart', (req,res) => {
    res.sendFile(path.resolve('./views/productCart.html'));
})


app.get('/register', (req,res) => {
    res.sendFile(path.resolve('./views/register.html'));
})


app.get('/login', (req,res) => {
    res.sendFile(path.resolve('./views/login.html'));
})

app.get('/404', (req, res) => {
      res.send("Error página no encontrada", 404);
    //console.log ();
});
