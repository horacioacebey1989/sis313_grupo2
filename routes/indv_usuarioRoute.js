'use strict'

var express = require('express');

var indv_usuarioController = require('../controllers/indv_usuarioController');

var api = express.Router();

api.post('/add_indv_usuario', indv_usuarioController.add_indv_usuario);

api.get('/loginUsuario', indv_usuarioController.loginUsuario);

module.exports = api;