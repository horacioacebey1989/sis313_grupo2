'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tipo_usuarioSchema = Schema({
<<<<<<< HEAD
    tipousuario: String,
    estado: Boolean
=======
    tiposusuario: String,
    estado: boolean
>>>>>>> 7a65bb750c92392b1a6e251944c82d505e734089

});

module.exports = mongoose.model('Tipo_Usuario', tipo_usuarioSchema);