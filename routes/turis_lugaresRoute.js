'use strict'

var express = require('express');

var turis_lugaresController = require('../controllers/turis_lugaresController');

var api = express.Router();

api.post('/addTuris_Lugares', turis_lugaresController.addTuris_Lugares);

api.get('/getTuris_Lugares/:id', turis_lugaresController.getTuris_Lugares);

api.get('/getTuris_LugaresList', turis_lugaresController.getTuris_LugaresList);

api.put('/updateTuris_Lugares/:id', turis_lugaresController.updateTuris_Lugares);

api.put('/deleteturis_lugares/:id', turis_lugaresController.deleteturis_lugares);

module.exports = api;