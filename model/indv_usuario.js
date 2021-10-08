"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var indv_usuarioSchema = Schema({
    tipoUsuario: { type: Schema.ObjectId, ref: "tipo_usuario" },
    usu_nombre: String,
    usu_email: String,
    usu_contraseña: String,
    estado: Boolean,
<<<<<<< HEAD
=======

>>>>>>> 7a65bb750c92392b1a6e251944c82d505e734089
});

module.exports = mongoose.model("indv_Usuario", indv_usuarioSchema);