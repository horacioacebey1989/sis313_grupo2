'use strict'

var turis_lugares = require('../model/turis_lugares');

function addTuris_Lugares(req, res) {
    var params = req.body;
    var turis_lugaresNEW = new turis_lugares();
    if (params.nombre) {
        turis_lugaresNEW.nombre = params.nombre;
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

function getTuris_Lugares1(req, res) {

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

function getTuris_Lugares(req, res) {

    var idTuris_Lugares = req.params.id;

    turis_lugares.findById(idTuris_Lugares, (err, turis_lugaresGET) => {
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

function deleteTuris_Lugares(req, res) {
    var idTuris_Lugares = req.params.id;
    var deleteOne = req.body;

    turis_lugares.deleteOne(idTuris_Lugares, deleteOne, { new: true }, (err, turisLugaresdeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (turisLugaresdeleteOne) return res.status(200).send({
            turis_lugares: turisLugaresdeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addTuris_Lugares,
    getTuris_Lugares1,
    getTuris_Lugares,
    updateTuris_Lugares,
    deleteTuris_Lugares
}