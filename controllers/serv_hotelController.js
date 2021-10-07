'use strict'

var servHotel = require('../model/serv_hotel');

function addServHotel(req, res) {
    var params = req.body;
    var servHotelNew = new servHotel();
    if (params.idProveedor, params.idServicio) {
        servHotelNew.hotel_nombre = params.hotel_nombre;
        servHotelNew.hotel_descripcion = params.hotel_descripcion;
        servHotelNew.hotel_direccion = params.hotel_direccion;
        servHotelNew.hotel_telefono = params.hotel_telefono;
        servHotelNew.hotel_nit = params.hotel_nit;
        servHotelNew.hotel_latitude = params.hotel_latitude;
        servHotelNew.hotel_longitud = params.hotel_longitud;
        servHotelNew.save((err, servHotelGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (servHotelGet) {
                return res.status(200).send({
                    servHotel: servHotelGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function getServHotel(req, res) {

    var params = req.body;
    var idServHotel = params.id;

    servHotel .findById(idServHotel , (err, servHotelGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (servHotelGet) {
            return res.status(200).send({
                servHotel : servHotelGet
            })
        }
    });
}


function updateServHotel(req, res) {
    var idServHotel = req.params.id;
    var update = req.body;

    servHotel.findByIdAndUpdate(idServHotel, update, { new: true }, (err, servHotelUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (servHotelUpdate) return res.status(200).send({
            servHotel : servHotelUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

function deleteServHotel(req, res) {
    var idServHotel = req.params.id;
    var deleteOne = req.body;

    servHotel.deleteOne(idServHotel, deleteOne, { new: true }, (err, servHoteldeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (servHoteldeleteOne) return res.status(200).send({
            servHotel : servHoteldeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addServHotel,
    getServHotel,
    updateServHotel,
    deleteServHotel
}