const express = require ("express");
const path = require ("path");
const mainController = {
    index:(req, res) => {
        res.sendFile(path.resolve('./views/index.html'));
    },
    notFound:(req, res) => {
        res.send("Error página no encontrada", 404);
}
}

module.exports = mainController;