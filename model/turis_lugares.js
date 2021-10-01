"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var turis_lugaresSchema = Schema({
    idProveedor: { type: Schema.ObjectId, ref: "indv_proveedor" },
    idAgencia: { type: Schema.ObjectId, ref: "serv_agencia" },
    idTipo_turismo: { type: Schema.ObjectId, ref: "tipo_turismo" },
    turis_nombre: String,
    turis_descripcion: String,
    turis_direccion: String,
    turis_telefono: Number,
    turis_latitude: Number,
    turis_longitud: Number,
});

module.exports = mongoose.model("Turis_Lugares", turis_lugaresSchema);