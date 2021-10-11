'use strict'

var express = require('express');

var serv_agenciaController = require('../controllers/serv_agenciaController');

var api = express.Router();

api.post('/addServAgencia', serv_agenciaController.addServAgencia);

api.get('/getServAgencia', serv_agenciaController.getServAgencia);

api.get('/updateServAgencia', serv_agenciaController.updateServAgencia);

module.exports = api;