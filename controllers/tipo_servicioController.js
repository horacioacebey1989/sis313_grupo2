'use strict'

var tipoServicio = require('../model/tipo_Servicio');

function addTipoServicio(req, res) {
    var params = req.body;
    var tipoServicioNew = new tipoServicio();
    if (params.categoria) {
        tipoServicioNew.categoria = params.categoria;
        tipoServicioNew.estado = true;
        tipoServicioNew.save((err, tipoServicioGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (tipoServicioGet) {
                return res.status(200).send({
                    tipoServicio: tipoServicioGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function getTipoServicio(req, res) {

    var params = req.body;
    var idTipoServicio = params.id;

    tipoServicio.findById(idTipoServicio, (err, tipoServicioGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoServicioGet) {
            return res.status(200).send({
                tipoServicio: tipoServicioGet
            })
        }
    });
}

function getTipoServicio2(req, res) {

    var idTipoServicio = req.params.id;

    tipoServicio.findById(idTipoServicio, (err, tipoServicioGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoServicioGet) {
            return res.status(200).send({
                tipoServicio: tipoServicioGet
            })
        }
    });

}

function updateTipoServicio(req, res) {
    var idTipoServicio = req.params.id;
    var update = req.body;

    tipoServicio.findByIdAndUpdate(idTipoServicio, update, { new: true }, (err, tipoServicioUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (tipoServicioUpdate) return res.status(200).send({
            tipoServicio: tipoServicioUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}


module.exports = {
    addTipoServicio,
    getTipoServicio,
    getTipoServicio2,
    updateTipoServicio
}