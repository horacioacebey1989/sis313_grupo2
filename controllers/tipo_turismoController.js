'use strict'

var tipoTurismo = require('../model/tipo_turismo');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function getTipoTurismoList(req, res) {
    tipoTurismo.find({ estado: true }, (err, tipoTurismoGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoTurismoGET) {
            return res.status(200).send({
                tipoTurismo: tipoTurismoGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
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

//FUNCIÓN PARA CAMBIAR EL ESTADO DE "TRUE" A FALSE
function deleteTipoTurismo(req, res) {
    var idtipoTurismo = req.params.id;

    tipoTurismo.findByIdAndUpdate(idtipoTurismo, { "estado": false }, { new: true }, (err, tipoTurismoUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (deleteTipoTurismo) return res.status(200).send({
            tipoTurismo: deleteTipoTurismo
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}



module.exports = {
    addTipoTurismo,
    getTipoTurismo,
    getTipoTurismoList,
    updateTipoTurismo,
    deleteTipoTurismo
}