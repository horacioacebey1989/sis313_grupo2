'use strict'

var express = require('express');

var serv_hotelController = require('../controllers/serv_hotelController');

var api = express.Router();

api.post('/addServHotel', serv_hotelController.addServHotel);

api.get('/getServHotel', serv_hotelController.getServHotel);

api.put('/updateServHotel', serv_hotelController.updateServHotel);

module.exports = api;