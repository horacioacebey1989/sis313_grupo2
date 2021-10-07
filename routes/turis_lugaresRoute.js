'use strict'

var express = require('express');

var turis_lugaresController = require('../controllers/turis_lugaresController');

var api = express.Router();


api.post('/addTuris_Lugares', turis_lugaresController.addTuris_Lugares);
api.get('/getTuris_LugaresByID', turis_lugaresController.getTipoUsuario);
api.get('/getTuris_LugaresByID/:id', turis_lugaresController.getTipoUsuario2);
api.put('/updateTuris_Lugares/:id', turis_lugaresController.updateTuris_Lugares);
api.delete('/deleteTuris_Lugares/:id', turis_lugaresController.deleteTuris_Lugares);

module.exports = api;