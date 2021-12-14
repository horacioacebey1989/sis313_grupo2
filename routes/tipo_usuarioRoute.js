'use strict'

var express = require('express');

var tipo_usuarioController = require('../controllers/tipo_usuarioController');

var api = express.Router();

api.post('/addTipoUsuario', tipo_usuarioController.addTipoUsuario);

api.get('/getTipoUsuario/:id', tipo_usuarioController.getTipoUsuario);

api.get('/get_TipoUsuarioList', tipo_usuarioController.get_TipoUsuarioList);

api.put('/updateTipoUsuario/:id', tipo_usuarioController.updateTipoUsuario);

api.put('/deletetipoUsuario/:id', tipo_usuarioController.deletetipoUsuario);

module.exports = api;