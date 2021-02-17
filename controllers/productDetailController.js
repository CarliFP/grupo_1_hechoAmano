const express = require ("express");
const path = require ("path");
const productDetailController = {
    detail:(req,res) => {
        res.sendFile(path.resolve('./views/productDetail.html'));
    }
}

module.exports = productDetailController;