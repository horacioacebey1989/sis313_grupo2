'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// RUTAS 

app.post('/prueba', (req, res) => {
=======
var bodyParser = require ('body-parser');
//var bcrypt = require('bcrypt-nodejs');

var app = express();

//Para cargar rutas
var tipoUsuario_route = require('./routes/tipoUsuario');
var usuario_route = require('./routes/usuario');
var serv_agencia_route = require('./routes/serv_agencia');
var serv_hotel_route = require('./routes/serv_hotel');
var indv_usuario_route = require('./routes/indv_usuarioRoute');
var tipoUsuario_route = require('./routes/tipo_usuarioRoute');
var serv_restauranteRoute = require('./routes/serv_restauranteRoute');


//Para middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Para rutas


app.use('/api', indv_usuario_route);
app.use('/api', tipoUsuario_route);
app.use('/api', serv_restauranteRoute);
app.use('/api', usuario_route);
app.use('/api', serv_agencia_route);
app.use('/api', serv_hotel_route);



//Exportacion
module.exports = app;