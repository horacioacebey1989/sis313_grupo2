"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serv_restauranteSchema = Schema({
    idProveedor: { type: Schema.ObjectId, ref: "indv_proveedor" },
    idServicio: { type: Schema.ObjectId, ref: "tipo_servicio" },
    res_nombre: String,
    res_descripcion: String,
    res_direccion: String,
    res_telefono: Number,
    res_nit: Number,
    res_latitude: Number,
    res_longitud: Number,
});

module.exports = mongoose.model("Restaurante", serv_restauranteSchema);