const express = require ("express");
const path = require ("path");
const fs = require('fs'); 

const productsFilePath = path.join(__dirname, '../data/jasonProductos.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
	index: (req, res) => {
		let vendidos = products.filter(product => product.status == 'vendidos'); 
		let destacados = products.filter(product => product.status == 'destacados');
		res.render('index', {destacados, vendidos})	
    },

    search: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let search = req.query.keywords;
		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
		res.render('results', { products: productsToSearch, search});
	},

    todos: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('product', {products})
    },

    mediosDePago: (req, res) => {
        res.render('mediosDePago'); 
    },

    /*CATEGORIAS*/ 

    arte: (req, res) => {
        title = 'ARTE'; 
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(product => product.category == 'arte'); 
		res.render('category', {product})
    },

    accesorios: (req, res) => {
        title = "ACCESORIOS"; 
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(product => product.category == 'accesorios'); 
		res.render('category', {product})
    },

    hogar: (req, res) => {
        title = "HOGAR"; 
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(product => product.category == 'hogar'); 
		res.render('category', {product})
    },
    juegos: (req, res) => {
        title = "JUEGOS"; 
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(product => product.category == 'juegos'); 
		res.render('category', {product})
    },

    cosmetica: (req, res) => {
        title = "COSMÉTICA"; 
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(product => product.category == 'cosmetica'); 
		res.render('category', {product})
    },

    vestimenta: (req, res) => {
        title = "ROPA Y CALZADO"
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter(product => product.category == 'ropa-y-calzado'); 
		res.render('category', {product})
    },
    
    /*ERROR 404 AUN NO PROBADA*/ 

    notFound:(req, res) => {
        res.render('ERROR PÁGINA NO ENCONTRADA', 404);
}
}

module.exports = mainController;