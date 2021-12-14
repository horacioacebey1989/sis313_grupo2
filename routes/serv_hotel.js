'use strict'

var express = require('express');

var serv_hotelController = require('../controllers/serv_hotelController');

var auth = require('../middlewares/aunthenticated')

var api = express.Router();



api.post('/addServHotel', serv_hotelController.addServHotel);
api.get('/getServHotel', serv_hotelController.getServHotel);
api.get('/updateServHotel', serv_hotelController.updateServHotel);
api.put('/deleteServHotel', serv_hotelController.deleteServHotel);


module.exports = api;