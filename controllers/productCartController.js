const express = require ("express");
const path = require ("path");
const productCartController = {
    cart:(req,res) => {
        res.render(path.resolve('./views/productCart.ejs'));
    }
}

module.exports = productCartController;