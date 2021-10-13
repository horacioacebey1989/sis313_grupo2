'use strict'

var express = require('express');

var tipo_turismoController = require('../controllers/tipo_turismoController');
const tipo_turismo = require('../model/tipo_turismo');

var api = express.Router();


api.post('/addTipoTurismo', tipo_turismoController.addTipoTurismo);
api.get('/getTipoTurismoByID', tipo_turismoController.getTipoTurismo);
api.get('/getTipoTurismoByID/:id', tipo_turismoController.getTipoTurismo2);
api.put('/updateTipoturismo/:id', tipo_turismoController.updateTipoTurismo);
api.put('/deleteTipoturismo/:id', tipo_turismoController.deleteTipoTurismo);


module.exports = api;