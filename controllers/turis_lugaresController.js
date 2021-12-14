'use strict'

var turis_lugares = require('../model/turis_lugares');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
function addTuris_Lugares(req, res) {
    var params = req.body;
    var turis_lugaresNEW = new turis_lugares();
    if (params.turis_nombre) {
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function getTuris_LugaresList(req, res) {

    turis_lugares.find({ visible: true }, (err, turis_lugaresGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (turis_lugaresGET) {
            return res.status(200).send({
                turis_lugares: turis_lugaresGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
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

//FUNCIÓN PARA CAMBIAR EL ESTADO DE "TRUE" A FALSE
function deleteturis_lugares(req, res) {
    var idturis_lugares = req.params.id;

    turis_lugares.findByIdAndUpdate(idturis_lugares, { "estado": false }, { new: true }, (err, turis_lugaresUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (deleteturis_lugares) return res.status(200).send({
            turis_lugares: deleteturis_lugares
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addTuris_Lugares,
    getTuris_Lugares,
    getTuris_LugaresList,
    updateTuris_Lugares,
    deleteturis_lugares
}