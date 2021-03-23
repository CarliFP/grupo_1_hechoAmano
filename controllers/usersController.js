const express = require ("express");
const path = require ("path");
const {validationResult} = require('express-validator'); 
const User = require("../models/User");
const bcryptjs = require('bcryptjs'); 
const { RSA_NO_PADDING } = require("constants");

const usersController = {

    register:(req,res) => {
        res.render('register');
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


            delete req.body.pass_confirm

            //console.log(req.body, req.file); 
            let userToCreate = {
                ...req.body,
                avatar: req.file.filename,
                pass: bcryptjs.hashSync(req.body.pass, 10),
            }
            /* ACÁ HAY QUE VER COMO CONFIRMAR LA CONTRASEÑA PORQUE TENEMOS PASS Y PASS_CONFIRM CON COMPARE? */

            console.log(userToCreate); 

        let userCreated = User.create(userToCreate);
        return res.redirect('/login'); 
    },

    login:(req,res) => {
        res.render('login');
    },

    loginProcess: (req, res) => { //agregarle las validaciones como en el register.

       let userToLogin = User.findByField('email', req.body.email); 



       if (userToLogin) {
           let isOkpass = bcryptjs.compareSync(req.body.pass, userToLogin.pass)

           if (isOkpass) {
               delete userToLogin.pass; // se elimina por seguridad
               req.session.userLogged = userToLogin;   //sesion se destruye solo si cierro navegador
                return res.redirect('/users/profile'); // vista de perfil de usuario
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
        //console.log('estas en profile');
        //console.log('sesion')
        return res.render('userProfile', {
            user: req.session.userLogged,
        })

    },
    
    /*FALTA DARLE FUNCIONALIDAD AL BOTÓN CERRAR SESIÓN CON ESTE MÉTODO*/
    logout: (req, res) => {
        req.session.destroy(); 
        console.log(req.session);
        return res.redirect('/')
    }

}
module.exports = usersController;