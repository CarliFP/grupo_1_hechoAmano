const express = require ("express");
const path = require ("path");
const {validationResult} = require('express-validator'); 
const User = require("../models/User");
const bcryptjs = require('bcryptjs'); 
const { RSA_NO_PADDING } = require("constants");

const usersController = {

    register:(req,res) => {
        return res.send("Bienvenidos al usuario nº " + req.params.idUsers);
    },
    processRegister:(req,res) => {
        //return res.send('viniste por post');
        //return res.send(req.body);
        const resultValidation = validationResult(req);
        //return res.send(resultValidation);

        if (resultValidation.errors.length > 0) { //resultValidation es un objeto literal y errors su property
            return res.render('register', {
                errors: resultValidation.mapped(), // mapped convierte un array en un objeto literal con propiedades
                oldData: req.body // xa que si se renueva el formulario porque falto un dato conserve el resto, value ver.
                //ver no me funciona EN COUNTRY
            })     
        }
            //retorna error si el usuario ya se registró por mail
            let userInDB = User.findByField('email', req.body.email);
            if (userInDB) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado',
                        }
                    },
                    oldData: req.body
                });
            }

            //console.log(req.body, req.file); 
            let userToCreate = {
                ...req.body,
                avatar: req.file.filename,
                pass: bcryptjs.hashSync(req.body.pass, 10),
                pass_confirm : bcryptjs.hashSync(req.body.pass_confirm, 10), 
            }
            /* ACÁ HAY QUE VER COMO CONFIRMAR LA CONTRASEÑA PORQUE TENEMOS PASS Y PASS_CONFIRM CON COMPARE? */

            //console.log(userToCreate); 

        let userCreated = User.create(userToCreate);
        return res.redirect('/login'); 
    },

    login:(req,res) => {
        return res.send('login');
    },

    loginProcess: (req, res) => {
       // let userToLogin = User.findByField('email', req.body.email); 
        return res.send(req.body); 

        console.log(req.body); 
    
    }   

}
module.exports = usersController;