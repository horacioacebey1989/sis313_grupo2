'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//CARGAR RUTAS
var indv_usuario_route = require('./routes/indv_usuarioRoute');
var restaurante_route =  require('./routes/serv_restaurante');
// MIDDLEWARES
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
app.use('/api', restaurante_route);

// EXPORTACION

module.exports = app;