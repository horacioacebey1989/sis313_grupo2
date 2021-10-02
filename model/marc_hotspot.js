"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var marc_hotspotSchema = Schema({
    idUsuario: { type: Schema.ObjectId, ref: "indv_usuario" },
    hot_descripcion: String,
    hot_fecha: Date,
    hot_latitud: Number,
    hot_longitud: Number
});

module.exports = mongoose.model("Hotspot", marc_hotspotSchema);