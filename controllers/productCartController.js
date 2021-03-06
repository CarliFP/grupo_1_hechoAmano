const express = require ("express");
const path = require ("path");

const productCartController = {
    cart:(req, res) => {
        res.render('productCart');
    }
}

module.exports = productCartController;