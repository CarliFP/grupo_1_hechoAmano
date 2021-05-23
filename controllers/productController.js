const express = require ("express");
const path = require ("path");
const {validationResult} = require('express-validator'); 
const fs = require('fs'); 
const { parse } = require("path");
let db = require("../src/database/models");
// const Products = require("../database/models/Products");

// const productsFilePath = path.join(__dirname, '../data/jasonProductos.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

	index: async (req,res) => {
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
		res.render('product', {destacados, vendidos})	
    },

	detail: function (req, res) {
		let ProductsDestacados = db.Products.findAll(
			{where: {
			  idSection: 1
		  }}
		  );

        let Oneproduct = db.Products.findByPk(req.params.id, {
			    include: [{association: "Categoria"}, {association: "Seccion"}]
			});

		Promise.all([ProductsDestacados, Oneproduct])
            .then(function([destacados, product]) {
                // res.send(genres.name);
                // res.send(genres[1].name);
                res.render("productDetail", {destacados, product});
				// res.send({categories, sections})
            })
        // db.Products.findByPk(req.params.id, {
        //     include: [{association: "Categoria"}, {association: "Seccion"}]
        // })
        //     .then(function(product) {
        //         // res.send(products);
        //         res.render("productDetail", {product});
		// 		// res.send(product.Categoria);
        //     })
    },

    // detail: (req,res) => {
	// 	let destacados = products; 
    //     let product = products.find(product => product.id == req.params.id)
    //     res.render('productDetail',{product, destacados})
    //     },
        

    create: (req,res) => {
		let pedidoCategories = db.Categories.findAll();

        let pedidoSections = db.Sections.findAll();

        Promise.all([pedidoCategories, pedidoSections])
            .then(function([categories, sections]) {
                // res.send(genres.name);
                // res.send(genres[1].name);
                res.render('productCreator', {categories, sections})
				// res.send({categories, sections})
            })

		// db.Categories.findAll()
		// .then(function(categories) {
		// 	return res.render('productCreator', {categories})
		// })
    },

    store: async (req, res) => {
		let categories = await db.Categories.findAll();

        let sections = await db.Sections.findAll();


		const resultValidation = validationResult(req);

		// res.send(validationResult(req));

        if (resultValidation.errors.length > 0) {
			// res.send(resultValidation.mapped());
			res.render('productCreator',
			{
			errors: resultValidation.mapped(), // mapped convierte un array en un objeto literal con propiedades
			oldData: req.body, // Ya que si se renueva el formulario porque falto un dato conserve el resto, value ver.
			categories, sections
			})}
		else {
			// res.send(req.body)
			await db.Products.create({
				name: req.body.name,
				seller: req.body.seller,
				price: req.body.price,
				stock: req.body.stock,
				shipping: req.body.shipping,
				description: req.body.description,
				payment: req.body.payment,
				idCategory: req.body.category,
				idSection: req.body.section,
				image: req.file.filename
					
			}).then(function(){
				// res.send(req.body);
				res.redirect("/product");
			})
		}

		// En mi rama no lo borre porque lo considero util (Ema).

		// res.send(req.file)

		// let nuevoProducto = req.body; 

		// nuevoProducto.id = products.length+1;
		// nuevoProducto.name = req.body.name
		// nuevoProducto.price = parseInt(req.body.price)
		// nuevoProducto.discount = parseInt(req.body.discount)
		// nuevoProducto.category = req.body.category
		// nuevoProducto.description = req.body.description
        // nuevoProducto.seller = req.body.seller
        // nuevoProducto.stock = parseInt(req.body.stock)
        // nuevoProducto.shipping = parseInt(req.body.shipping)
        // nuevoProducto.payment = parseInt(req.body.payment)
        // nuevoProducto.status = req.body.status

		// let imagen; 
		
		// if (!req.file) {
		// 	imagen = 'default-image-png.png'
		// }
		// else {
		// 	imagen = req.file.filename;
		// }

			/*var propValue;
			for(var propName in imagen) {
				propValue = imagen[propName]
			
				console.log(propName,propValue);
			}*/

		// nuevoProducto.image = imagen;
		
		// products.push(nuevoProducto); 

		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); 
		// res.redirect('/product'); 
	},

    edit: (req, res) => {
		// let productId = req.params.id
		// let productToEdit = products.find(product => product.id == req.params.id);
		// res.render('productEdit',{productToEdit, productId});
		let pedidoProduct = db.Products.findByPk(req.params.id);

		let pedidoCategories = db.Categories.findAll();

        let pedidoSections = db.Sections.findAll();

        Promise.all([pedidoCategories, pedidoSections, pedidoProduct])
            .then(function([categories, sections, product]) {
                // res.send(genres.name);
                // res.send(genres[1].name);
                res.render("productEdit", {categories:categories, sections:sections, product:product})
            })
	},

    update: async (req, res) => {
		
		let categories = await db.Categories.findAll();

        let sections = await db.Sections.findAll();


		const resultValidation = validationResult(req);

		// res.send(validationResult(req));

        if (resultValidation.errors.length > 0) {
			// res.send(resultValidation.mapped());
			res.render('productEdit',
			{
			errors: resultValidation.mapped(), // mapped convierte un array en un objeto literal con propiedades
			oldData: req.body, // Ya que si se renueva el formulario porque falto un dato conserve el resto, value ver.
			categories, sections
			})}
		else {db.Products.update({
				// ...req.body
				name: req.body.name,
				seller: req.body.seller,
				price: req.body.price,
				stock: req.body.stock,
				shipping: req.body.shipping,
				description: req.body.description,
				payment: req.body.payment,
				idCategory: req.body.category,
				idSection: req.body.section,
				image: req.file.filename
			},
			{   
				where: {idProducts: req.params.id}
			}).then(function() {
					res.redirect('/product');
			});
		}
		

		// let id = req.params.id;
		// let productToEdit = products.find(product => product.id == id)
		// let image;

		// if(req.file != undefined){
		// 	image = req.file.filename
		// }
		// else {
		// 	image = productToEdit.image
		// }

		// productToEdit = {
		// 	id: productToEdit.id,
		// 	...req.body,
		// 	image: image,
		// };
		
	
		// let nuevoProducto = products.map(product => {
		// 	if (product.id == productToEdit.id) {
		// 		return product = {...productToEdit};
		// 	}
		// 	return product;
		// })

		// fs.writeFileSync(productsFilePath, JSON.stringify(nuevoProducto, null, ' '));
		// res.redirect('/product');
		// res.send(req.body)
		// res.send({...req.body})
		// res.redirect("/peliculas/" + req.params.id)
	},
    
  	destroy : (req, res) => {
		// let id =  req.params.id;
		// let finalProducts = products.filter(product=> product.id != id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' ')); 
		// //res.send('Producto eliminado');
		// res.redirect('/product'); 
		db.Products.destroy({
            where: {
                idProducts: req.params.id
            }
        })
        res.redirect('/product'); 
		}
    }

module.exports = productController;

