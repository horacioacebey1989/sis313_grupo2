'use strict'

var express = require('express');

var serv_hotelController = require('../controllers/serv_hotelController');

var api = express.Router();

api.post('/addServHotel', serv_hotelController.addServHotel);

api.get('/getServHotel/:id', serv_hotelController.getServHotel);

api.get('/get_servHotelList', serv_hotelController.get_servHotelList);

api.put('/updateServHotel/:id', serv_hotelController.updateServHotel);

api.put('/deleteservHotel/:id', serv_hotelController.deleteservHotel);

module.exports = api;