"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tipo_turismoSchema = Schema({
    categoria: String,
    estado: Boolean
});

module.exports = mongoose.model("Tipo_Turismo", tipo_turismoSchema);