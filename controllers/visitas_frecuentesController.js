'use strict'

var visitas_frecuentes = require('../model/visitas_frecuentes');

function addvisitas_frecuentes(req, res) {
    var params = req.body;
    var visitas_frecuentesNew = new visitas_frecuentes();
    if (params.idUsuario, params.vis_fecha, params.idProveedor, params.idHotel, params.idRestaurante, params.idAgencia) {
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

function getvisitas_frecuentes2(req, res) {

    var idvisitas_frecuentes = req.params.id;

    visitas_frecuentes.findById(idvisitas_frecuentes, (err, visitas_frecuentesGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (visitas_frecuentesGet) {
            return res.status(200).send({
                visitas_frecuentes: visitas_frecuentesGet
            })
        }
    });

}

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
    getvisitas_frecuentes2,
    updatevisitas_frecuentes,
}