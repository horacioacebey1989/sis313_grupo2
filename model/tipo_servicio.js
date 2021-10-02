"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tipo_servicioSchema = Schema({
    categoria: String,
});

module.exports = mongoose.model("Tipo_Servicio", tipo_servicioSchema);