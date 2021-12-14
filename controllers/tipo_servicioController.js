'use strict'

var tipoServicio = require('../model/tipo_Servicio');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
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

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function get_TipoServicioList(req, res) {

    tipoServicio.find({ visible: true }, (err, tipoServicioGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (tipoServicioGET) {
            return res.status(200).send({
                tipoServicio: tipoServicioGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
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

//FUNCIÓN PARA CAMBIAR EL ESTADO DE "TRUE" A FALSE
function deletetipoServicio(req, res) {
    var idtipoServicio = req.params.id;

    tipoServicio.findByIdAndUpdate(idtipoServicio, { "estado": false }, { new: true }, (err, tipoServicioUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (deletetipoServicio) return res.status(200).send({
            tipoServicio: deletetipoServicio
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addTipoServicio,
    getTipoServicio,
    get_TipoServicioList,
    updateTipoServicio,
    deletetipoServicio
}