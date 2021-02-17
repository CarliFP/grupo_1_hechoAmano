const express = require ("express");
const path = require ("path");
const registerController = {
    register:(req,res) => {
        res.sendFile(path.resolve('./views/register.html'));
    }
}

module.exports = registerController;