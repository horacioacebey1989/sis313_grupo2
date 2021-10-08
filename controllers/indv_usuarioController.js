'use strict'

var indv_usuario = require('../model/indv_usuario');
var jwt = require('../services/jwt')

function add_indv_usuario(req, res) {
    console.log(req.body);
    var params = req.body;
    var indv_usuarioNew = new indv_usuario();

    if (params.tipoUsuario, params.usu_nombre, params.usu_email, params.usu_contraseña) {
        indv_usuarioNew.tipoUsuario = params.tipoUsuario;
        indv_usuarioNew.usu_nombre = params.usu_nombre;
        indv_usuarioNew.usu_contraseña = params.usu_contraseña;
        indv_usuarioNew.estado = true;
        indv_usuarioNew.save((err, indv_usuarioGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (indv_usuarioGet) {
                res.status(200).send({
                    indv_usuario: indv_usuarioGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function loginUsuario(req, res) {
    var params = req.body;

    indv_usuario.findOne({ usu_nombre: params.usu_nombre }, (err, usuarioCheck) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (usuarioCheck) {
            return res.status(200).send({
                indv_usuario: usuarioCheck,
                token: jwt.createToken(usuarioCheck)
            })
        } else {
            return res.status(404).send({ message: 'No ha encontrado el indv_usuario!' })
        }
    });

}


// UPDATE

module.exports = {
    add_indv_usuario,
    loginUsuario
}