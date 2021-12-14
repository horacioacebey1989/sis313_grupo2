'use strict'

var express = require('express');

var serv_restauranteController = require('../controllers/serv_restauranteController');

var api = express.Router();

api.post('/addserv_restaurante', serv_restauranteController.addserv_restaurante);

api.get('/getserv_restaurante/:id', serv_restauranteController.getserv_restaurante);

api.get('/getserv_restauranteList', serv_restauranteController.getserv_restauranteList);

api.put('/updateserv_restaurante/:id', serv_restauranteController.updateserv_restaurante);

api.put('/deleteserv_restaurante/:id', serv_restauranteController.deleteserv_restaurante);

module.exports = api;