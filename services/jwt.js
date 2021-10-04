'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var llave_secreta = 'q1w2e3';

exports.createToken = function(usuario) {
    var data = {
        sudId: usuario._id,
        usu_nombre: usuario.usu_nombre,
        usu_email: usuario.usu_email,
        usu_contraseña: usuario.usu_contraseña,
        estado: usuario.estado,
        exp: moment().add(30, 'days').unix
    };
    return jwt.encode(data, llave_secreta);
}