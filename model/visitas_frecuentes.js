"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var visitas_frecuentesSchema = Schema({
    idUsuario: { type: Schema.ObjectId, ref: "indv_usuario" },
    vis_fecha: Date,
    idProveedor: { type: Schema.ObjectId, ref: "indv_proveedor" },
    idHotel: { type: Schema.ObjectId, ref: "serv_hotel" },
    idRestaurante: { type: Schema.ObjectId, ref: "serv_restaurante" },
    idAgencia: { type: Schema.ObjectId, ref: "serv_agencia" },
});

module.exports = mongoose.model("Visitas_Frecuentes", visitas_frecuentesSchema);