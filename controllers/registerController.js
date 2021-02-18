const express = require ("express");
const path = require ("path");
const registerController = {
    register:(req,res) => {
        res.render(path.resolve('./views/register.ejs'));
    }
}

module.exports = registerController;