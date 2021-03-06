const express = require ("express");
const path = require ("path");

const productController = {

    creator: (req,res) => {
        res.render('productCreator');
    },

    //cart:(req,res) => {
        //res.render('productCart');
    //},
    
    detail:(req,res) => {
        res.render('productDetail');
    },

    detalle:(req,res) => {
        res.send("Bienvenidos al detalle del producto " + req.params.idProduct);
    }
}

module.exports = productController;