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
			imagen = 'default-image-png.png'
		}
		else {
			imagen = req.file.file;
		}
		nuevoProducto.imagen = imagen;
		
		products.push(nuevoProducto); 

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); 
		res.redirect('/product'); 
	},

    edit: (req, res) => {
		let productId = req.params.id
		let productToEdit = products.find(product => product.id == req.params.id);
		res.render('productEdit',{productToEdit, productId});
	},

    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/product');
	},
    
  	destroy : (req, res) => {
		let id =  req.params.id;
		let finalProducts = products.filter(product=> product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' ')); 
		//res.send('Producto eliminado');
		res.redirect('/product'); 
		}
    }

module.exports = productController;

