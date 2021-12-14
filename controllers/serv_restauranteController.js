'use strict'

var serv_restaurante = require('../model/serv_restaurante');

//FUNCIÓN PARA AGREGAR DATOS A ESTA TABLA
function addserv_restaurante(req, res) {
    var params = req.body;
    var restauranteNew = new serv_restaurante();

    if (params.idProveedor, params.idServicio, params.res_nombre, params.res_descripcion, params.res_direccion, params.res_telefono, params.res_nit, params.res_latitude, params.res_longitud) {
        restauranteNew.idProveedor = params.idProveedor,
        restauranteNew.idServicio = params.idServicio,
        restauranteNew.res_nombre = params.res_nombre;
        restauranteNew.res_descripcion = params.res_descripcion;
        restauranteNew.res_direccion = params.res_direccion;
        restauranteNew.res_telefono = params.res_telefono;
        restauranteNew.res_nit = params.res_nit;
        //    restauranteNew.res_latitude = params.res_latitude;
        //    restauranteNew.res_longitud = params.res_longitud;
        restauranteNew.save((err, restauranteGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (restauranteGet) {
                return res.status(200).send({
                    serv_restaurante: restauranteGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA POR ID
function getserv_restaurante(req, res) {

    var params = req.body;
    var idserv_restaurante = params.id;

    serv_restaurante.findById(idserv_restaurante, (err, serv_restauranteGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (serv_restauranteGet) {
            return res.status(200).send({
                serv_restaurante: serv_restauranteGet
            })
        }
    });
}

//FUNCIÓN PARA RECIBIR DATOS A ESTA TABLA SIN NECESIDAD DEL ID
function getserv_restauranteList(req, res) {

    serv_restaurante.find({ visible: true }, (err, serv_restauranteGET) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (serv_restauranteGET) {
            return res.status(200).send({
                serv_restaurante: serv_restauranteGET
            })
        }
    });

}

//FUNCIÓN PARA ACTUALIZAR ESTA TABLA
function updateserv_restaurante(req, res) {
    var idserv_restaurante = req.params.id;
    var update = req.body;

    serv_restaurante.findByIdAndUpdate(idserv_restaurante, update, { new: true }, (err, serv_restauranteUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (serv_restauranteUpdate) return res.status(200).send({
            serv_restaurante: serv_restauranteUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}


function deleteserv_restaurante(req, res) {
    var idserv_restaurante = req.params.id;
    var deleteOne = req.body;

    serv_restaurante.deleteOne(idserv_restaurante, deleteOne, { new: true }, (err, serv_restaurantedeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (serv_restaurantedeleteOne) return res.status(200).send({
            serv_restaurante: serv_restaurantedeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}


module.exports = { 
    addserv_restaurante,
    getserv_restaurante,
    getserv_restaurante2,
    updateserv_restaurante,
    deleteserv_restaurante
}