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

    arte: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let arte = products.filter(product => product.category == 'arte'); 
		res.render('arte', {arte})
    },

    /*CATEGORIAS FALTA CREAR LAS VIEWS AUN NO FUNCIONA*/ 
    accesorios: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let accesorios = products.filter(product => product.category == 'accesorios'); 
		res.render('accesorios', {accesorios})
    },

    hogar: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let hogar = products.filter(product => product.category == 'hogar'); 
		res.render('hogar', {hogar})
    },
    juegos: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let juegos = products.filter(product => product.category == 'juegos'); 
		res.render('juegos', {juegos})
    },

    cosmetica: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let cosmetica = products.filter(product => product.category == 'cosmetica'); 
		res.render('cosmetica', {cosmetica})
    },

    vestimenta: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let cosmetica = products.filter(product => product.category == 'ropa-y-calzado'); 
		res.render('vestimenta', {vestimenta})
    },

    login:(req,res) => {
        res.render('login');
    },

    register:(req,res) => {
        res.render('register');
    },

    notFound:(req, res) => {
        res.render("Error página no encontrada", 404);
}
}

module.exports = mainController;