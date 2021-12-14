'use strict'

var tipoUsuario = require('../model/tipo_usuario');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function get_TipoUsuarioList(req, res) {

    tipoUsuario.find({ visible: true }, (err, tipoUsuarioGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoUsuarioGET) {
            return res.status(200).send({
                tipoUsuario: tipoUsuarioGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
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

//FUNCIÓN PARA CAMBIAR EL ESTADO DE "TRUE" A FALSE
function deletetipoUsuario(req, res) {
    var idtipoUsuario = req.params.id;

    tipoUsuario.findByIdAndUpdate(idtipoUsuario, { "estado": false }, { new: true }, (err, tipoUsuarioUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (deletetipoUsuario) return res.status(200).send({
            tipoUsuario: deletetipoUsuario
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addTipoUsuario,
    getTipoUsuario,
    get_TipoUsuarioList,
    updateTipoUsuario,
    deletetipoUsuario
}