// const User = require('../models/User');
const db = require('../src/database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;


async function userLoggedM (req, res, next) {
    //console.log('pase por el MD de user logged')
    //let isLogged = false
    res.locals.isLogged = false;  //lo paso a local.

    let emailInCookie = req.cookies.userEmail;
    // let userFromCookie = User.findByField('email', emailInCookie);
    let userFromCookie = await db.Users.findOne({
        where:{
           email:{[Op.like]:emailInCookie}
       }})

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true; 
        res.locals.userLogged = req.session.userLogged; 
    }

    // let emailInCookie = req.cookies.userEmail;
    // console.log(emailInCookie);
    // let userFromCookie = User.findByField('email', emailInCookie);
    // console.log(userFromCookie);

    next();

}

// async function userLoggedMiddleware(req, res, next) {
//     res.locals.isLogged = false;

//     let emailInCookie = req.cookies.userEmail;
//     let userFromCookie = await db.Users.findOne({
//          where:{
//             email:{[Op.like]:emailInCookie}
//         }})
        
//     if(userFromCookie){
//         req.session.userLogged = userFromCookie;    
//     }

//     if (req.session.userLogged) {
//         res.locals.isLogged = true;
// 		res.locals.userLogged = req.session.userLogged;
//     } 

//     next();
// }

// module.exports = userLoggedMiddleware;


module.exports = userLoggedM; 