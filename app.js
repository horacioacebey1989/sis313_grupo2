'use strict'

var express = require('express');
var bodyParser = require ('body-parser');
//var bcrypt = require('bcrypt-nodejs');

var app = express();

//Para cargar rutas
var tipoUsuario_route = require('./routes/tipoUsuario');
var usuario_route = require('./routes/usuario');
var serv_agencia_route = require('./routes/serv_agencia');
var indv_proveedor_route = require('./routes/indv_proveedor');

//Para middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Para rutas
app.post('/prueba', (req,res) =>{
    console.log(req.body);
    res.status(200).send({
        message : 'Accion de prueba 2'
    })
});

app.get('/', (req, res) =>{
    res.status(200).send({
        message : 'API REST'
    })
});

app.use('/api', tipoUsuario_route);
app.use('/api', usuario_route);
app.use('/api', serv_agencia_route);
app.use('/api', indv_proveedor_route);

//Exportacion
module.exports = app;