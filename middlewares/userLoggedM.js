const User = require('../models/User');

function userLoggedM (req, res, next) {
    //console.log('pase por el MD de user logged')
    //let isLogged = false
    res.locals.isLogged = false;  //lo paso a local.

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

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

module.exports = userLoggedM; 