const express = require ("express");
const path = require ("path");
const fs = require('fs'); 
const { parse } = require("path");

const productsFilePath = path.join(__dirname, '../data/jasonProductos.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

    index: (req,res) => {
        let vendidos = products.filter(product => product.status == 'vendidos'); 
		let destacados = products.filter(product => product.status == 'destacados');
		res.render('product', {destacados, vendidos})	
    },

    detail: (req,res) => {
        let product = products.find(product => product.id == req.params.id)
        res.render('productDetail',{product})
        },
        

    create: (req,res) => {
        res.render('productCreator');
    },

    store: (req, res) => {

		let nuevoProducto = req.body; 

		nuevoProducto.id = products.length+1;
		nuevoProducto.name = req.body.name
		nuevoProducto.price = parseInt(req.body.price)
		nuevoProducto.discount = parseInt(req.body.discount)
		nuevoProducto.category = req.body.category
		nuevoProducto.description = req.body.description
        nuevoProducto.seller = req.body.seller
        nuevoProducto.stock = parseInt(req.body.stock)
        nuevoProducto.shipping = parseInt(req.body.shipping)
        nuevoProducto.payment = parseInt(req.body.payment)
        nuevoProducto.status = req.body.status

		let imagen; 
		
		if (!req.file) {
			imagen = 'default-image.png'
		}
		else {
			imagen = req.file.file;
		}
		nuevoProducto.imagen = imagen;
		
		products.push(nuevoProducto); 

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); 
		res.redirect('/product'); 
	},

    edit: (req,res) => {
        
    },
    update: (req,res) => {
       
    },
    destroy: (req,res) => {
       
    },

    //cart:(req,res) => {
        //res.render('productCart');
    //},
    

}

module.exports = productController;