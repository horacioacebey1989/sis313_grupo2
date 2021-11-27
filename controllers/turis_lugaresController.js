'use strict'

var turis_lugares = require('../model/turis_lugares');

function addTuris_Lugares(req, res) {
    var params = req.body;
    var turis_lugaresNEW = new turis_lugares();
    if (params.turis_nombre, params.turis_descripcion, params.turis_direccion, params.turis_latitude, params.turis_longitud) {
        turis_lugaresNEW.turis_nombre = params.turis_nombre;
        turis_lugaresNEW.turis_descripcion = params.turis_descripcion;
        turis_lugaresNEW.turis_direccion = params.turis_direccion;
        turis_lugaresNEW.turis_telefono = params.turis_telefono;
        turis_lugaresNEW.turis_latitude = params.turis_latitude;
        turis_lugaresNEW.turis_longitud = params.turis_longitud;
        turis_lugaresNEW.estado = true;
        turis_lugaresNEW.save((err, turis_lugaresGET) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (turis_lugaresGET) {
                return res.status(200).send({
                    turis_lugares: turis_lugaresGET
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function getTuris_Lugares(req, res) {

    var params = req.body;
    var idTuris_Lugares = params.id;

    turis_lugares.findById(idTuris_Lugares, (err, turis_lugaresGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (turis_lugaresGET) {
            return res.status(200).send({
                turis_lugares: turis_lugaresGET
            })
        }
    });
}

function getTuris_Lugares2(req, res) {

    turis_lugares.find({ visible: true }, (err, turis_lugaresGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (turis_lugaresGET) {
            return res.status(200).send({
                turis_lugares: turis_lugaresGET
            })
        }
    });

}

function updateTuris_Lugares(req, res) {
    var idTuris_Lugares = req.params.id;
    var update = req.body;

    turis_lugares.findByIdAndUpdate(idTuris_Lugares, update, { new: true }, (err, tipoServicioUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (tipoServicioUpdate) return res.status(200).send({
            turis_lugares: tipoServicioUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addTuris_Lugares,
    getTuris_Lugares,
    getTuris_Lugares2,
    updateTuris_Lugares,
}