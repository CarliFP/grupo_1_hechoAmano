const express = require ("express");
const path = require ("path");
const loginController = {
    login:(req,res) => {
        res.sendFile(path.resolve('./views/login.html'));
    }
}

module.exports = loginController;