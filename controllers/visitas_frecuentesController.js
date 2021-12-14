'use strict'

var visitas_frecuentes = require('../model/visitas_frecuentes');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
function addvisitas_frecuentes(req, res) {
    var params = req.body;
    var visitas_frecuentesNew = new visitas_frecuentes();
    if (params.idUsuario) {
        visitas_frecuentesNew.idUsuario = params.idUsuario;
        visitas_frecuentesNew.vis_fecha = params.vis_fecha;
        visitas_frecuentesNew.estado = true;
        visitas_frecuentesNew.idProveedor = params.idProveedor;
        visitas_frecuentesNew.idHotel = params.idHotel;
        visitas_frecuentesNew.idRestaurante = params.idRestaurante;
        visitas_frecuentesNew.idAgencia = params.idAgencia;
        visitas_frecuentesNew.save((err, visitas_frecuentesGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (visitas_frecuentesGet) {
                return res.status(200).send({
                    visitas_frecuentes: visitas_frecuentesGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
function getvisitas_frecuentes(req, res) {

    var params = req.body;
    var idvisitas_frecuentes = params.id;

    visitas_frecuentes.findById(idvisitas_frecuentes, (err, visitas_frecuentesGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (visitas_frecuentesGet) {
            return res.status(200).send({
                visitas_frecuentes: visitas_frecuentesGet
            })
        }
    });
}

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function getvisitas_FrecuentesList(req, res) {

    visitas_frecuentes.find({ visible: true }, (err, visitas_frecuentesGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (visitas_frecuentesGET) {
            return res.status(200).send({
                visitas_frecuentes: visitas_frecuentesGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
function updatevisitas_frecuentes(req, res) {
    var idvisitas_frecuentes = req.params.id;
    var update = req.body;

    visitas_frecuentes.findByIdAndUpdate(idvisitas_frecuentes, update, { new: true }, (err, visitas_frecuentesUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (visitas_frecuentesUpdate) return res.status(200).send({
            visitas_frecuentes: visitas_frecuentesUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addvisitas_frecuentes,
    getvisitas_frecuentes,
    getvisitas_FrecuentesList,
    updatevisitas_frecuentes,
}