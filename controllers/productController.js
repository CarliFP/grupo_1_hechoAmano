const express = require ("express");
const path = require ("path");
const fs = require('fs'); 
const { parse } = require("path");
let db = require("../database/models");
const Products = require("../database/models/Products");

const productsFilePath = path.join(__dirname, '../data/jasonProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {

	list: function (req, res) {
        // db.Countries.findAll()
			// .then(countries => {
		// db.Categories.findAll()
			// .then(categories => {
		db.Products.findAll()
            .then(products => {
				// res.send({products})	
				res.render('product', {products})	
                // res.render("listCountries", {countries})
            })
    },

	guardado: function (req, res) {
        // res.send(req.body)
        db.Countries.create({
            name: req.body.name
       })
        res.redirect("/product")
    },

	// crear: function (req, res) {
	// 	return res.render("creacionCountries")
	// },

	guardado: function (req, res) {
        // res.send(req.body)
        db.Countries.create({
            name: req.body.name
       })
        res.redirect("/product/list")
    },

	detalle: function (req, res) {
        db.Products.findByPk(req.params.id, {
            include: [{association: "Categoria"}, {association: "Seccion"}]
        })
            .then(function(product) {
                // res.send(products);
                res.render("productDetail", {product, products});
				// res.send(product.Categoria);
            })
    },

	borrar: function (req, res) {
        db.Countries.destroy({
            where: {
                idCountries: req.params.id
            }
        })
        res.redirect("/product/list");
    },
	editar: function (req, res) {
		db.Countries.findByPk(req.params.id)
		.then(countries=> {
			res.render("editCountries", {countries:countries})
		});
    },
    actualizar: function (req, res) {
        // res.send(req.body)
        db.Countries.update({
                ...req.body
                // title: req.body.title,
                // rating: req.body.rating,
                // awards: req.body.awards,
                // release_date: req.body.release_date,
                // length: req.body.length,
                // genre_id: req.body.genre_id},
                // res.send(req.params.id),
            },
            {   
                where: {idCountries: req.params.id}
            })
                .then(function() {
                    res.redirect("/product/" + req.params.id)
                });
        // res.send({...req.body})
        // res.redirect("/peliculas/" + req.params.id)
    },

    index: (req,res) => {
        let vendidos = products.filter(product => product.status == 'vendidos'); 
		let destacados = products.filter(product => product.status == 'destacados');
		res.render('product', {destacados, vendidos})	
    },

    detail: (req,res) => {
		let destacados = products; 
        let product = products.find(product => product.id == req.params.id)
        res.render('productDetail',{product, destacados})
        },
        

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

    store: (req, res) => {
		// res.send(req.body)
        db.Products.create({
			name: req.body.name,
            seller: req.body.seller,
            price: req.body.price,
            stock: req.body.stock,
            shipping: req.body.shipping,
			description: req.body.description,
            payment: req.body.payment,
			idCategory: req.body.idCategories,
			idSection: req.body.idSections,
		}, {image: req.file.filename})


		// res.send(req.body)
        res.redirect("/product")

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
		let productId = req.params.id
		let productToEdit = products.find(product => product.id == req.params.id);
		res.render('productEdit',{productToEdit, productId});
	},

    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image;

		if(req.file != undefined){
			image = req.file.filename
		}
		else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
	
		let nuevoProducto = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(nuevoProducto, null, ' '));
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

