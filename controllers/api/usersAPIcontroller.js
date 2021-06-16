const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { response } = require('express');

const usersAPIcontroller = {
    'list': (req, res) => {
        db.Users.findAll({})
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    detail: (req, res) => {
        db.Users
            .findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })

    }
}
module.exports = usersAPIcontroller;