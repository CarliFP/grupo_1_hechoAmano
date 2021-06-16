const express = require ("express");
const path = require ("path");
const fs = require('fs'); 
let db = require("../src/database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.join(__dirname, '../data/jasonProductos.json');

// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
  integrantes: (req, res) => {
    res.render('integrantes');
  },

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
    let productsToSearch = await db.Products.findAll({
      where: {
        name: {[db.Sequelize.Op.like]:  '%' + req.query.keywords + '%'}
    }});

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
  /* Queda agregar los where aqui para cada categoria y configurar la vista para que muestre lo de la DB y no del JSON. */ /* Hecho. */

  arte: async (req, res) => {
    title = 'ARTE'; 
    // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    // let products = await db.Products.findAll();
    // let product = products.filter(product => product.category == 'arte');
    let product = await db.Products.findAll({
      where: {
        idCategory: {[Op.like]: 2}
      }
    });
		res.render('category', {product})
  },

  accesorios: async (req, res) => {
        title = "ACCESORIOS"; 
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let products = await db.Products.findAll();
        // let product = products.filter(product => product.category == 'accesorios'); 
        let product = await db.Products.findAll({
          where: {
            idCategory: {[Op.like]: 1}
          }
        });
		res.render('category', {product})
  },

  hogar: async (req, res) => {
        title = "HOGAR"; 
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let products = await db.Products.findAll();
        // let product = products.filter(product => product.category == 'hogar'); 
        let product = await db.Products.findAll({
          where: {
            idCategory: {[Op.like]: 3}
          }
        });
		res.render('category', {product})
  },
  juegos: async (req, res) => {
        title = "JUEGOS"; 
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let products = await db.Products.findAll();
        // let product = products.filter(product => product.category == 'juegos'); 
        let product = await db.Products.findAll({
          where: {
            idCategory: {[Op.like]: 4}
          }
        });
		res.render('category', {product})
  },

  cosmetica: async (req, res) => {
        title = "COSMÉTICA"; 
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let products = await db.Products.findAll();
        // let product = products.filter(product => product.category == 'cosmetica'); 
        let product = await db.Products.findAll({
          where: {
            idCategory: {[Op.like]: 5}
          }
        });
		res.render('category', {product})
  },

  vestimenta: async (req, res) => {
        title = "ROPA Y CALZADO"
        // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let products = await db.Products.findAll();
        // let product = products.filter(product => product.category == 'ropa-y-calzado'); 
        let product = await db.Products.findAll({
          where: {
            idCategory: {[Op.like]: 6}
          }
        });
		res.render('category', {product})
  },
    
  /*ERROR 404 AUN NO PROBADA*/ 

  notFound:(req, res) => {
        res.render('ERROR PÁGINA NO ENCONTRADA', 404);
  }
}

module.exports = mainController;