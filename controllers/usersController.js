const express = require ("express");
const path = require ("path");

const usersController = {

    usuario:(req,res) => {
        res.send("Bienvenidos al usuario nº " + req.params.idUsers);
    }
}

module.exports = usersController;