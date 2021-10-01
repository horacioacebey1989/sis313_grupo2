"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serv_hotelSchema = Schema({
    idProveedor: { type: Schema.ObjectId, ref: "indv_proveedor" },
    idServicio: { type: Schema.ObjectId, ref: "tipo_servicio" },
    hotel_nombre: String,
    hotel_descripcion: String,
    hotel_direccion: String,
    hotel_telefono: Number,
    hotel_nit: Number,
    hotel_latitude: Number,
    hotel_longitud: Number,
});

module.exports = mongoose.model("Hotel", serv_hotelSchema);