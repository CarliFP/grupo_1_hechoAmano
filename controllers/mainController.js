const express = require ("express");
const path = require ("path");
const mainController = {
    index:(req, res) => {
        res.render(path.resolve('./views/index.ejs'));
    },
    notFound:(req, res) => {
        res.render("Error página no encontrada", 404);
}
}

module.exports = mainController;