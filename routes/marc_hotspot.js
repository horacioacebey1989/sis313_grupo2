'use strict'

var express = require('express');

var marc_hotspotController = require('../controllers/marc_hotspotController');

var auth = require('../middlewares/aunthenticated')

var api = express.Router();


api.post('/addMarcHotspot', marc_hotspotController.addMarcHostpot);
api.get('/getMarcHotspot', marc_hotspotController.getMarcHotspot);
api.get('/updateMarcHotspot', marc_hotspotController.updateMarcHotspot);
api.put('/deleteMarcHotspot', marc_hotspotController.deleteMarcHotspot);

module.exports = api;