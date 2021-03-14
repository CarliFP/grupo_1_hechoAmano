function userLoggedM (req, res, next) {
    //console.log('pase por el MD de user logged')
    //let isLogged = false
    res.locals.isLogged = false;  //lo paso a local.- 

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true; 
        res.locals.userLogged = req.session.userLogged; 
    }

    next();

}

module.exports = userLoggedM; 