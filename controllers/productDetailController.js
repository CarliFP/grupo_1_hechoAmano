const express = require ("express");
const path = require ("path");
const productDetailController = {
    detail:(req,res) => {
        res.render(path.resolve('./views/productDetail.ejs'));
    }
}

module.exports = productDetailController;