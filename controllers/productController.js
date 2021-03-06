const express = require ("express");
const path = require ("path");

const productController = {

    index: (req,res) => {
        
    },

    detail: (req,res) => {
        
    },

    create: (req,res) => {
        res.render('productCreator');
    },

    store: (req,res) => {
      
    },

    edit: (req,res) => {
        
    },
    update: (req,res) => {
       
    },
    destroy: (req,res) => {
       
    },

    //cart:(req,res) => {
        //res.render('productCart');
    //},
    

}

module.exports = productController;