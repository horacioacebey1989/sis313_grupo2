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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// RUTAS 

app.post('/prueba', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        message: 'Accion de prueba 2'
    })
});

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'API REST'
    })
});

app.use('/api', indv_usuario_route);
app.use('/api', serv_agencia_route);
app.use('/api', serv_hotel_route);
app.use('/api', serv_restaurante_route);
app.use('/api', tipo_servicio_route);
app.use('/api', tipo_turismo_route);
app.use('/api', tipo_usuario_route);
app.use('/api', turis_lugares_route);
app.use('/api', visitas_frecuentes_route);


// EXPORTACION

module.exports = app;