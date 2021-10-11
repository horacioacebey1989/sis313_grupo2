'use strict'

var indvProveedor = require('../model/serv_proveedor');

function addIndvProveedor(req, res) {
    var params = req.body;
    var indvProveedorNew = new indvProveedor();
    if (params.idProveedor) {
        indvProveedorNew.pro_nombre = params.pro_nombre;
        indvProveedorNew.pro_ci = params.pro_ci;
        indvProveedorNew.pro_telefono = params.pro_telefono;
        indvProveedorNew.pro_email = params.pro_email;
        indvProveedorNew.save((err, indvProveedorGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (indvProveedorGet) {
                return res.status(200).send({
                    indvProveedor : indvProveedorGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduzca los valores correctamente' });
    }
}

function getIndvProveedor(req, res) {

    var params = req.body;
    var idIndvProveedor = params.id;

    indvProveedor.findById(idIndvProveedor, (err, indvProveedorGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (indvProveedorGet) {
            return res.status(200).send({
                indvProveedor : indvProveedorGet
            })
        }
    });
}


function updateIndvProveedor(req, res) {
    var idIndvProveedor = req.params.id;
    var update = req.body;

    indvProveedor.findByIdAndUpdate(idIndvProveedor, update, { new: true }, (err, indvProveedorUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (indvProveedorUpdate) return res.status(200).send({
            indvProveedor: indvProveedorUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

function deleteIndvProveedor(req, res) {
    var idIndvProveedor = req.params.id;
    var deleteOne = req.body;

    indvProveedor.deleteOne(idIndvProveedor, deleteOne, { new: true }, (err, indvProveedordeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (indvProveedordeleteOne) return res.status(200).send({
            indvProveedor : indvProveedordeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addIndvProveedor,
    getIndvProveedor,
    updateIndvProveedor,
    deleteIndvProveedor
}