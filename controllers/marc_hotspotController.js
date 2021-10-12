'use strict'

var marcHotspot = require('../model/marc_hotspot');

function addMarcHostpot (req, res){
    var params = req.body;
    var marcHotspotNew = new marcHotspot();

    if(params.idUsuario){
        marcHotspotNew.hot_descripcion = params.hot_descripcion;
        marcHotspotNew.hot_fecha = params.hot_fecha;
        marcHotspotNew.hot_latitud = params.hot_latitud;
        marcHotspotNew.hot_longitud = params.hot_longitud;
        marcHotspotNew.save((err, marcHotspotGet) => {
            if (err) return res.status(500).send({ message: 'Error al guardar los datos!' });
            if (marcHotspotGet) {
                return res.status(200).send({
                    marcHotspot: marcHotspotGet
                })
            }
        });
    } else {
        res.status(404).send({ message: 'Introduce los valores correctamente' });
    }    
}

function getMarcHotspot(req, res){
    var params = req.body;
    var idMarcHotspot = params.id;

    marcHotspot.findById(idMarcHotspot , (err, marcHotspotGet) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (marcHotspotGet) {
            return res.status(200).send({
                marcHotspot : marcHotspotGet
            })
        }
    });
}

function updateMarcHotspot(req, res){
    var idMarcHotspot = req.params.id;
    var update = req.body;

    marcHotspot.findByIdAndUpdate(idMarcHotspot, update, { new: true }, (err, marcHotspotUpdate) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (marcHotspotUpdate) return res.status(200).send({
            marcHotspot : marcHotspotUpdate
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar' })
        }
    });
}

function deleteMarcHotspot(req, res){
    var idMarcHotspot = req.params.id;
    var deleteOne = req.body;

    marcHotspot.deleteOne(idMarcHotspot, deleteOne, { new: true }, (err, marcHotspotDeleteOne) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });

        if (marcHotspotDeleteOne) return res.status(200).send({
            marcHotspot : marcHotspotDeleteOne
        })
        else {
            return res.status(404).send({ messsage: 'No se pudo actualizar!' })
        }
    });

}

module.exports = {
    addMarcHostpot,
    getMarcHotspot,
    updateMarcHotspot,
    deleteMarcHotspot
}