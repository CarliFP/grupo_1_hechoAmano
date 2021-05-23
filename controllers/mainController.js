const express = require ("express");
const path = require ("path");
const fs = require('fs'); 
let db = require("../src/database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.join(__dirname, '../data/jasonProductos.json');

// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
	index: async (req, res) => {
    let vendidos = await db.Products.findAll(
      {where: {
        idSection: 2
    }}
    );

    let destacados = await db.Products.findAll(
      {where: {
        idSection: 1
    }}
    );

		// let vendidos = products.filter(product => product.status == 'vendidos'); 
		// let destacados = products.filter(product => product.status == 'destacados');
		res.render('index', {destacados, vendidos})
    // res.send({destacados, vendidos})
    },

  search: async (req, res) => {
		// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let search = req.query.keywords;
		// let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
    // Aca hay que ver si se puede implementar otro operador, porque con el like si o si hay que buscar el nombre completo del producto.	
    let productsToSearch = await db.Products.findAll(
      {where: {
      name: {[db.Sequelize.Op.like]: search}
    }})

		res.render('results', { products: productsToSearch, search});
	},

  todos: async (req, res) => {
    let products = await db.Products.findAll()
		res.render('product', {products})
  },

  mediosDePago: (req, res) => {
        res.render('mediosDePago'); 
  },

  /*CATEGORIAS*/
  // Queda agregar los where aqui para cada categoria y configurar la vista para que muestre lo de la DB y no del JSON.

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