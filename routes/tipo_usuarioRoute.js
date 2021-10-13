'use strict'

var express = require('express');

var tipo_usuarioController = require('../controllers/tipo_usuarioController');

var api = express.Router();

api.post('/addTipoUsuario', tipo_usuarioController.addTipoUsuario);
api.get('/getTipoUsuarioByID', tipo_usuarioController.getTipoUsuario);
api.get('/getTipoUsuarioByID/:id', tipo_usuarioController.getTipoUsuario2);
api.put('/updateTipoUsuario/:id', tipo_usuarioController.updateTipoUsuario);

module.exports = api;