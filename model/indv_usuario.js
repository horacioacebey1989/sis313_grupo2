"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var indv_usuarioSchema = Schema({
    tipoUsuario: { type: Schema.ObjectId, ref: "tipo_usuario" },
    usu_nombre: String,
    estado: Boolean,
    usu_email: String,
    usu_contraseña: String,
});

module.exports = mongoose.model("indv_Usuario", indv_usuarioSchema);