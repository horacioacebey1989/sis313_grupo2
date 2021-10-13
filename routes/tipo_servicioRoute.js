'use strict'

var express = require('express');

var tipo_servicioController = require('../controllers/tipo_servicioController');

var api = express.Router();

api.post('/addTipoServicio', tipo_servicioController.addTipoServicio);

api.get('/getTipoServicioByID', tipo_servicioController.getTipoServicio);

api.get('/getTipoServicioByID/:id', tipo_servicioController.getTipoServicio2);

api.put('/updateTipoServicio/:id', tipo_servicioController.updateTipoServicio);

module.exports = api;