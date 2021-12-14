'use strict'

var servAgencia = require('../model/serv_agencia');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
function addServAgencia(req, res) {
    var params = req.body;
    var servAgenciaNew = new servAgencia();
    if (params.ag_nombre) {
        servAgenciaNew.idProveedor = params.idProveedor;
        servAgenciaNew.idServicio = params.idServicio;
        servAgenciaNew.ag_nombre = params.ag_nombre;
        servAgenciaNew.estado = true;
        servAgenciaNew.ag_descripcion = params.ag_descripcion;
        servAgenciaNew.ag_direccion = params.ag_direccion;
        servAgenciaNew.ag_telefono = params.ag_telefono;
        servAgenciaNew.ag_nit = params.ag_nit;
        servAgenciaNew.ag_latitude = params.ag_latitude;
        servAgenciaNew.ag_longitud = params.ag_longitud;
        servAgenciaNew.save((err, servAgenciaGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (servAgenciaGet) {
                return res.status(200).send({
                    servAgencia: servAgenciaGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
function getServAgencia(req, res) {

    var params = req.body;
    var idServAgencia = params.id;

    servAgencia.findById(idServAgencia, (err, servAgenciaGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (servAgenciaGet) {
            return res.status(200).send({
                servAgencia: servAgenciaGet
            })
        }
    });
}

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function get_servAgenciaList(req, res) {

    servAgencia.find({ visible: true }, (err, servAgenciaGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (servAgenciaGET) {
            return res.status(200).send({
                servAgencia: servAgenciaGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
function updateServAgencia(req, res) {
    var idServAgencia = req.params.id;
    var update = req.body;

    servAgencia.findByIdAndUpdate(idServAgencia, update, { new: true }, (err, servAgenciaUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (servAgenciaUpdate) return res.status(200).send({
            servAgencia: servAgenciaUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}



function deleteServAgencia(req, res) {
    var idServAgencia = req.params.id;
    var deleteOne = req.body;

    servAgencia.deleteOne(idServAgencia, deleteOne, { new: true }, (err, servAgenciadeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (servAgenciadeleteOne) return res.status(200).send({
            servAgencia : servAgenciadeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addServAgencia,
    getServAgencia,

    get_servAgenciaList,
    updateServAgencia,
    deleteservAgencia

}