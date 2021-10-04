"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var indv_usuarioSchema = Schema({
    tipoUsuario: { type: Schema.ObjectId, ref: "tipo_usuario" },
    usu_nombre: String,
    usu_email: String,
    usu_contraseña: String,
    estado: Boolean,
});

module.exports = mongoose.model("Usuario", indv_usuarioSchema);