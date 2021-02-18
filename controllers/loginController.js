const express = require ("express");
const path = require ("path");
const loginController = {
    login:(req,res) => {
        res.render(path.resolve('./views/login.ejs'));
    }
}

module.exports = loginController;