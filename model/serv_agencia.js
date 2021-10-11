"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serv_agenciaSchema = Schema({
    idProveedor: { type: Schema.ObjectId, ref: "indv_proveedor" },
    idServicio: { type: Schema.ObjectId, ref: "tipo_servicio" },
    ag_nombre: String,
    estado: Boolean,
    ag_descripcion: String,
    ag_direccion: String,
    ag_telefono: Number,
    ag_nit: Number,
    ag_latitude: Number,
    ag_longitud: Number,
});

module.exports = mongoose.model("Agencia", serv_agenciaSchema);