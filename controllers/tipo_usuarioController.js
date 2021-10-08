'use strict'

var tipoUsuario = require('../model/tipo_usuario');

function addTipoUsuario(req, res) {
    var params = req.body;
    var tipoUsuarioNew = new tipoUsuario();
    if (params.tipousuario) {
        tipoUsuarioNew.tipousuario = params.tipousuario;
        tipoUsuarioNew.estado = true;
        tipoUsuarioNew.save((err, tipoUsuarioGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (tipoUsuarioGet) {
                return res.status(200).send({
                    tipoUsuario: tipoUsuarioGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function getTipoUsuario(req, res) {

    var params = req.body;
    var idTipoUsuario = params.id;

    tipoUsuario.findById(idTipoUsuario, (err, tipoUsuarioGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoUsuarioGet) {
            return res.status(200).send({
                tipoUsuario: tipoUsuarioGet
            })
        }
    });
}

function getTipoUsuario2(req, res) {

    var idTipoUsuario = req.params.id;

    tipoUsuario.findById(idTipoUsuario, (err, tipoUsuarioGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoUsuarioGet) {
            return res.status(200).send({
                tipoUsuario: tipoUsuarioGet
            })
        }
    });

}

function updateTipoUsuario(req, res) {
    var idTipoUsuario = req.params.id;
    var update = req.body;

    tipoUsuario.findByIdAndUpdate(idTipoUsuario, update, { new: true }, (err, tipoUsuarioUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (tipoUsuarioUpdate) return res.status(200).send({
            tipoUsuario: tipoUsuarioUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

function deleteTipoUsuario(req, res) {
    var idTipoUsuario = req.params.id;
    var deleteOne = req.body;

    tipoUsuario.deleteOne(idTipoUsuario, deleteOne, { new: true }, (err, tipoUsuariodeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (tipoUsuariodeleteOne) return res.status(200).send({
            tipoUsuario: tipoUsuariodeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addTipoUsuario,
    getTipoUsuario,
    getTipoUsuario2,
    updateTipoUsuario,
    deleteTipoUsuario
}