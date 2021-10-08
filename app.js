'use strict'

var express = require('express');
<<<<<<< HEAD

var bodyParser = require('body-parser');

var app = express();

var indv_usuario_route = require('./routes/indv_usuarioRoute');
var tipoUsuario_route = require('./routes/tipo_usuarioRoute');
var serv_restauranteRoute = require('./routes/serv_restauranteRoute');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// RUTAS 

=======

var bodyParser = require('body-parser');



var app = express();




var indv_usuario_route = require('./routes/indv_usuarioRoute');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var tipoUsuario_route = require('./routes/tipoUsuario');

var usuario_route = require('./routes/usuario');



// RUTAS 


>>>>>>> 7a65bb750c92392b1a6e251944c82d505e734089
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
<<<<<<< HEAD
=======

>>>>>>> 7a65bb750c92392b1a6e251944c82d505e734089
app.use('/api', tipoUsuario_route);
app.use('/api', serv_restauranteRoute);


// EXPORTACION

module.exports = app;