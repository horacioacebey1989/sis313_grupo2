'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tipo_usuarioSchema = Schema({
    tipousuario: String,
    estado: Boolean

});

module.exports = mongoose.model('Tipo_Usuario', tipo_usuarioSchema);