"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var indv_proveedorSchema = Schema({
    idServicio: { type: Schema.ObjectId, ref: "tipo_servicio" },
    pro_nombre: String,
    estado: Boolean,
    pro_ci: Number,
    pro_telefono: Number,
    pro_email: String,
});

module.exports = mongoose.model("Proveedor", indv_proveedorSchema);