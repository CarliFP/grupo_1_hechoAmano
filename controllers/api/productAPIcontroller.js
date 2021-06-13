const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { response } = require('express');

const productAPIcontroller = {
    'list': (req, res) => {
        db.Products.findAll({})
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/product'
                },
                data: products
            }
                res.json(respuesta);
            })
    },
    detail: (req, res) => {
        db.Products
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    data: product,
                    status: 200
                })
            })

    }
}
module.exports = productAPIcontroller;