const fs = require('fs');

function recordameMiddleware(req, res, next) {
    // next();
    console.log(req.cookies)

    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if (archivoUsuario == "") {
            usuarios = [];
        } else {
            usuarios = JSON.parse(archivoUsuario);
        }
        let usuarioALoguerarse;
        for (let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email == req.cookies.recordame) {
                usuarioALoguerarse = usuarios[i];
                break;
            }
        }
        req.session.usuarioLogueado = usuarioALoguerarse;
    }
    next();
}

module.exports = recordameMiddleware;