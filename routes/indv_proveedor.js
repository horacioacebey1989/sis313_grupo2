'use strict'

var express = require('express');

var indv_proveedorController = require('../controllers/indv_proveedorController');

var auth = require('../middlewares/aunthenticated')

var api = express.Router();


api.post('/addIndvProveedor', indv_proveedorController.addIndvProveedor);
api.get('/getIndvProveedor', indv_proveedorController.getIndvProveedor);
api.get('/updateIndvProveedor', indv_proveedorController.updateIndvProveedor);
api.put('/deleteIndvProveedor', indv_proveedorController.deleteIndvProveedor);

module.exports = api;