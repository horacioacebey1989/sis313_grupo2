'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var indv_usuario_route = require('./routes/indv_usuarioRoute');
var serv_agencia_route = require('./routes/serv_agencia');
var serv_hotel_route = require('./routes/serv_hotel');
var serv_restaurante_route = require('./routes/serv_restauranteRoute');
var tipo_servicio_route = require('./routes/tipo_servicioRoute');
var tipo_turismo_route = require('./routes/tipo_turismoRoute');
var tipo_usuario_route = require('./routes/tipo_usuarioRoute');
var turis_lugares_route = require('./routes/turis_lugaresRoute');
var visitas_frecuentes_route = require('./routes/visitas_frecuentesRoute');
var tipoUsuario_route = require('./routes/tipoUsuario');
var usuario_route = require('./routes/usuario');
var serv_agencia_route = require('./routes/serv_agencia');
var serv_hotel_route = require('./routes/serv_hotel');
var marc_hotspot_route = require('./routes/marc_hotspot');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// RUTAS 



app.use('/api', indv_usuario_route);
app.use('/api', serv_agencia_route);
app.use('/api', serv_hotel_route);
app.use('/api', serv_restaurante_route);
app.use('/api', tipo_servicio_route);
app.use('/api', tipo_turismo_route);
app.use('/api', tipo_usuario_route);
app.use('/api', turis_lugares_route);
app.use('/api', visitas_frecuentes_route);
app.use('/api', tipoUsuario_route);
app.use('/api', serv_restauranteRoute);


app.use('/api', tipoUsuario_route);
app.use('/api', usuario_route);
app.use('/api', serv_agencia_route);
app.use('/api', serv_hotel_route);
app.use('/api', marc_hotspot_route);




// EXPORTACION
module.exports = app;