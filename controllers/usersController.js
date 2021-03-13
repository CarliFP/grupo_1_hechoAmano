const express = require ("express");
const path = require ("path");
const {validationResult} = require('express-validator'); 

const usersController = {

    usuario:(req,res) => {
        return res.send("Bienvenidos al usuario nº " + req.params.idUsers);
    },
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
        return res.send('Las validaciones se pasaron exitosamente y no tienes errores')
    }
}

module.exports = usersController;