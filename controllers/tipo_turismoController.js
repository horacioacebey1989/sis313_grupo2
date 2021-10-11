'use strict'

var tipoTurismo = require('../model/tipo_turismo');

function addTipoTurismo(req, res) {
    var params = req.body;
    var tipoTurismoNew = new tipoTurismo();
    if (params.categoria) {
        tipoTurismoNew.categoria = params.categoria;
        tipoTurismoNew.estado = true;
        tipoTurismoNew.save((err, tipoTurismoGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (tipoTurismoGet) {
                return res.status(200).send({
                    tipoTurismo: tipoTurismoGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function getTipoTurismo(req, res) {

    var params = req.body;
    var idtipoTurismo = params.id;

    tipoTurismo.findById(idtipoTurismo, (err, tipoTurismoGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoTurismoGet) {
            return res.status(200).send({
                tipoTurismo: tipoTurismoGet
            })
        }
    });
}

function getTipoTurismo2(req, res) {

    var idtipoTurismo = req.params.id;

    tipoTurismo.findById(idtipoTurismo, (err, tipoTurismoGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoTurismoGet) {
            return res.status(200).send({
                tipoTurismo: tipoTurismoGet
            })
        }
    });

}

function updateTipoTurismo(req, res) {
    var idtipoTurismo = req.params.id;
    var update = req.body;

    tipoTurismo.findByIdAndUpdate(idtipoTurismo, update, { new: true }, (err, tipoTurismoUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (tipoTurismoUpdate) return res.status(200).send({
            tipoTurismo: tipoTurismoUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}


module.exports = {
    addTipoTurismo,
    getTipoTurismo,
    getTipoTurismo2,
    updateTipoTurismo
}