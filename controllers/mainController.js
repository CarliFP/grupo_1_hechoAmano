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