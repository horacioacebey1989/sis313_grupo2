'use strict'

var express = require('express');

var serv_restauranteController = require('../controllers/serv_restauranteController');

var auth = require('../middlewares/aunthenticated')

var api = express.Router();


api.post('/addserv_restaurante', serv_restauranteController.addserv_restaurante);
api.get('/getserv_restauranteByID', serv_restauranteController.getserv_restaurante);
api.get('/getserv_restauranteByID/:id', serv_restauranteController.getserv_restaurante2);
api.put('/updateserv_restaurante/:id', serv_restauranteController.updateserv_restaurante);

module.exports = api;