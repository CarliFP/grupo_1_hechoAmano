const express = require ("express");
const path = require ("path");
const productCartController = {
    cart:(req,res) => {
        res.sendFile(path.resolve('./views/productCart.html'));
    }
}

module.exports = productCartController;