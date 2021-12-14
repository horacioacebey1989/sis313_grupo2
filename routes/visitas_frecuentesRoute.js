'use strict'

var express = require('express');

var visitas_frecuentesController = require('../controllers/visitas_frecuentesController');

var api = express.Router();

api.post('/addvisitas_frecuentes', visitas_frecuentesController.addvisitas_frecuentes);

api.get('/getvisitas_frecuentesByID', visitas_frecuentesController.getvisitas_frecuentes);

api.get('/getvisitas_FrecuentesList', visitas_frecuentesController.getvisitas_FrecuentesList);

api.put('/updatevisitas_frecuentes/:id', visitas_frecuentesController.updatevisitas_frecuentes);

module.exports = api;