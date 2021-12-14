'use strict'

var express = require('express');

var tipo_turismoController = require('../controllers/tipo_turismoController');

var api = express.Router();

api.post('/addTipoTurismo', tipo_turismoController.addTipoTurismo);

api.get('/getTipoTurismo/:id', tipo_turismoController.getTipoTurismo);

api.get('/getTipoTurismoList', tipo_turismoController.getTipoTurismoList);

api.put('/updateTipoturismo/:id', tipo_turismoController.updateTipoTurismo);


api.put('/deleteTipoTurismo/:id', tipo_turismoController.deleteTipoTurismo);


module.exports = api;