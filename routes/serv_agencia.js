'use strict'

var express = require('express');

var serv_agenciaController = require('../controllers/serv_agenciaController');

var api = express.Router();

api.post('/addServAgencia', serv_agenciaController.addServAgencia);

api.get('/getServAgencia/:id', serv_agenciaController.getServAgencia);

api.get('/get_servAgenciaList', serv_agenciaController.get_servAgenciaList);

api.put('/updateServAgencia/:id', serv_agenciaController.updateServAgencia);

api.put('/deleteservAgencia/:id', serv_agenciaController.deleteservAgencia);

module.exports = api;