const express = require ("express");
const path = require ("path");
const {validationResult, body} = require('express-validator'); 
// const User = require("../models/User");
const bcryptjs = require('bcryptjs'); 
const { Op } = require("sequelize");
const { RSA_NO_PADDING } = require("constants");
let db = require("../src/database/models");

const usersController = {

    register:(req,res) => {

        // res.cookie('testing', 'Hola mundo', {maxAge: 1000 * 30});
        let pedidoCategories = db.Categories.findAll();

        let pedidoTypeUsers = db.TypeUsers.findAll();
        
        let pedidoCountries = db.Countries.findAll();

        let pedidoTiendas = db.Tienda.findAll();

        Promise.all([pedidoCategories, pedidoTypeUsers, pedidoCountries, pedidoTiendas])
            .then(function([categories, typeUsers, countries, tiendas]) {
                // res.send(genres.name);
                // res.send(genres[1].name);
                res.render('register', {categories, typeUsers, countries, tiendas})
				// res.send({categories, sections})
            })

		// db.Categories.findAll()
		// .then(function(categories) {
		// 	return res.render('productCreator', {categories})
		// })
    },

    processRegister:async (req,res) => {
        //return res.send('viniste por post');
        //return res.send(req.body);

        let categories = await db.Categories.findAll();

        let typeUsers = await db.TypeUsers.findAll();
        
        let countries = await db.Countries.findAll();

        let tiendas = await db.Tienda.findAll();

        const resultValidation = validationResult(req);
        //return res.send(resultValidation);

        // retorna error si el usuario ya se registró por mail
        let userInDB = await db.Users.findAll({
            where:{
                email:{[Op.like]:req.body.email}
            }
        }).catch(error => res.send(error));
        if (userInDB.length>0) {
            // res.send(userInDB);
            // res.send("Este mail ya esta registrado");
            return res.render('register',
            {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado',
                    }
                },
                oldData: req.body,
                categories, typeUsers, countries, tiendas     
            });
        }

        if (resultValidation.errors.length > 0) { //resultValidation es un objeto literal y errors su property
            // res.send(req.body);
            // res.send("Hay errores")
            res.render('register',
            {
                errors: resultValidation.mapped(), // mapped convierte un array en un objeto literal con propiedades
                oldData: req.body, // Ya que si se renueva el formulario porque falto un dato conserve el resto, value ver.  
                categories, typeUsers, countries, tiendas              
            })     
        }

        delete req.body.pass_confirm

        //console.log(req.body, req.file); 
        db.Users.create({
            //...req.body,
            name: req.body.name,
            user: req.body.user,
            email: req.body.email,
            birth_date: req.body.birth_date,
            address: req.body.address,
            idCountry: req.body.country,
            idTypeUser: req.body.profile,
            Tienda_idTienda: req.body.tienda,
            avatar: req.file.filename,
            pass: bcryptjs.hashSync(req.body.pass, 10),
        }).then(function() {
            //res.send(req.body)
            // req.session.userLogged = user;
            res.redirect("/users/login");
        }).catch(error => res.send(error));
        /* ACÁ HAY QUE VER COMO CONFIRMAR LA CONTRASEÑA PORQUE TENEMOS PASS Y PASS_CONFIRM CON COMPARE? */

        // console.log(user); 

        // let userCreated = user;
        // res.redirect('/users/login'); 
        // res.send(req.body)
    },

    login:(req,res) => {
        // console.log(req.cookies);
        // console.log(req.cookies.testing);
        res.render('login');
    },

    loginProcess: async (req, res) => { //agregarle las validaciones como en el register.

        // return res.send(req.body);

       let userToLogin = await db.Users.findOne({
        where:{
            email:{[Op.like]:req.body.email}
        }})



       if (userToLogin) {
           let isOkpass = bcryptjs.compareSync(req.body.pass, userToLogin.pass);

           if (isOkpass) {
               delete userToLogin.pass; // Se elimina por seguridad.
               req.session.userLogged = userToLogin;   // Sesion se destruye solo si cierro navegador.
               if(req.body.remember) {
                   res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})
               }
               return res.render('userProfile', {userToLogin}); // Vista de perfil de usuario.
           }
           return res.render ('login', {
               errors: {
                   email: {
                       msg: 'Las credenciales son inválidas'
                   }
               }
           })
       }
       
       if (userToLogin) {
            return res.send(userToLogin)
       }
       return res.render('login', {
           errors: {
               email: {
                   msg: 'Email no encontrado'
               }
           }
       })
    },   

    profile: (req, res) => {
        // console.log('estas en profile');
        // console.log('sesion');
        // console.log(req.cookies.userEmail);
        // res.send(req.session.userLogged)
        return res.render('userProfile', {
            userToLogin: req.session.userLogged
        })

    },

    edit: (req, res) => {

        let user = req.session.userLogged;

        // res.send(user)

        // res.cookie('testing', 'Hola mundo', {maxAge: 1000 * 30});
        let pedidoCategories = db.Categories.findAll();

        let pedidoTypeUsers = db.TypeUsers.findAll();
                
        let pedidoCountries = db.Countries.findAll();
        
        let pedidoTiendas = db.Tienda.findAll();
        
        Promise.all([pedidoCategories, pedidoTypeUsers, pedidoCountries, pedidoTiendas])
            .then(function([categories, typeUsers, countries, tiendas]) {
                // res.send(genres.name);
                // res.send(genres[1].name);
                res.render('userEdit', {categories, typeUsers, countries, tiendas, user})
                // res.send({categories, sections})
        })
    },

    update: async (req, res) => {

        let user = req.session.userLogged;

        let categories = await db.Categories.findAll();

        let typeUsers = await db.TypeUsers.findAll();
        
        let countries = await db.Countries.findAll();

        let tiendas = await db.Tienda.findAll();

        const resultValidation = validationResult(req);
        //return res.send(resultValidation);

        if (resultValidation.errors.length > 0) { //resultValidation es un objeto literal y errors su property
            // res.send(req.body);
            // res.send("Hay errores")
            res.render('userEdit',
            {
                errors: resultValidation.mapped(), // mapped convierte un array en un objeto literal con propiedades
                oldData: req.body, // Ya que si se renueva el formulario porque falto un dato conserve el resto, value ver.  
                categories, typeUsers, countries, tiendas, user             
            })     
        } else {
                    //console.log(req.body, req.file); 
        db.Users.update({
            //...req.body,
            name: req.body.name,
            user: req.body.user,
            email: req.body.email,
            birth_date: req.body.birth_date,
            address: req.body.address,
            idCountry: req.body.country,
            idTypeUser: req.body.profile,
            Tienda_idTienda: req.body.tienda,
            avatar: req.file.filename,
            pass: bcryptjs.hashSync(req.body.pass, 10),
        },
        {   
			where: {idUsers: req.params.id}
		}).then(function() {
        //res.send(req.body)
        // req.session.userLogged = user;
        res.redirect("/users/login");
        })
        }

    },
    
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy(); 
        console.log(req.session);
        return res.redirect('/')
    },

    deleteUserById: (req, res) => {
        // res.send(req.session.userLogged)
        db.Users.destroy({
            where: {
                idUsers: req.session.userLogged.idUsers
            }
        })
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect("/");
    }

    }; 


module.exports = usersController;