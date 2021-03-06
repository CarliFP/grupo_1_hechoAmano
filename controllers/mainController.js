const express = require ("express");
const path = require ("path");
const mainController = {
    index:(req, res) => {
        res.render('index');
    },

    login:(req,res) => {
        res.render('login');
    },

    register:(req,res) => {
        res.render('register');
    },

    notFound:(req, res) => {
        res.render("Error página no encontrada", 404);
}
}

module.exports = mainController;