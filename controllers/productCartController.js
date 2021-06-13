const express = require ("express");
const path = require ("path");
let db = require("../src/database/models");
const sequelize = db.sequelize;

const productCartController = {
    cart: async (req, res) => {
        let vendidos = await db.Products.findAll(
            {where:
                {idSection: 2}
            }
        );
      
        let destacados = await db.Products.findAll(
            {
                where: {idSection: 1}
            }
        );
        res.render('productCart', { vendidos, destacados });
    }
}

module.exports = productCartController;