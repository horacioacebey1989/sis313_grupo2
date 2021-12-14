'use strict'

var express = require('express');

var tipo_servicioController = require('../controllers/tipo_servicioController');

var api = express.Router();

api.post('/addTipoServicio', tipo_servicioController.addTipoServicio);

api.get('/getTipoServicio/:id', tipo_servicioController.getTipoServicio);

api.get('/get_TipoServicioList', tipo_servicioController.get_TipoServicioList);

api.put('/updateTipoServicio/:id', tipo_servicioController.updateTipoServicio);

api.put('/deletetipoServicio/:id', tipo_servicioController.deletetipoServicio);

module.exports = api;