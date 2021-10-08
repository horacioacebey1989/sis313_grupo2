'use strict'

var express = require('express');

var tipo_usuarioController = require('../controllers/tipo_usuarioController');

<<<<<<< HEAD
var api = express.Router();

=======
var auth = require('../middlewares/aunthenticated')

var api = express.Router();


>>>>>>> 7a65bb750c92392b1a6e251944c82d505e734089
api.post('/addTipoUsuario', tipo_usuarioController.addTipoUsuario);
api.get('/getTipoUsuarioByID', tipo_usuarioController.getTipoUsuario);
api.get('/getTipoUsuarioByID/:id', tipo_usuarioController.getTipoUsuario2);
api.put('/updateTipoUsuario/:id', tipo_usuarioController.updateTipoUsuario);

module.exports = api;