'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

//RUTAS QUE USAREMOS EN LA API
var indv_usuarioRoute = require('./routes/indv_usuarioRoute');
var serv_agencia_route = require('./routes/serv_agencia');
var serv_hotel_route = require('./routes/serv_hotel');
var serv_restaurante_route = require('./routes/serv_restauranteRoute');
var tipo_servicio_route = require('./routes/tipo_servicioRoute');
var tipo_turismo_route = require('./routes/tipo_turismoRoute');
var tipo_usuario_route = require('./routes/tipo_usuarioRoute');
var turis_lugares_route = require('./routes/turis_lugaresRoute');
var visitas_frecuentes_route = require('./routes/visitas_frecuentesRoute');

var hotspotRoute = require('./routes/hotspotRoute');

var tipoUsuario_route = require('./routes/tipoUsuario');
var usuario_route = require('./routes/usuario');
var serv_agencia_route = require('./routes/serv_agencia');
var serv_hotel_route = require('./routes/serv_hotel');
var marc_hotspot_route = require('./routes/marc_hotspot');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

// RUTAS 





app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'API REST'
    })
});


//LAS RUTAS ENLISTADAS DENTRO DE LA API
app.use('/api/usuario', indv_usuarioRoute);
app.use('/api', serv_agencia_route);
app.use('/api', serv_hotel_route);
app.use('/api', serv_restaurante_route);
app.use('/api', tipo_servicio_route);
app.use('/api', tipo_turismo_route);
app.use('/api', tipo_usuario_route);
app.use('/api', turis_lugares_route);
app.use('/api', visitas_frecuentes_route);

app.use('/api/hotspot', hotspotRoute);

app.use('/api', tipoUsuario_route);
app.use('/api', serv_restauranteRoute);


app.use('/api', tipoUsuario_route);
app.use('/api', usuario_route);
app.use('/api', serv_agencia_route);
app.use('/api', serv_hotel_route);
app.use('/api', marc_hotspot_route);





// EXPORTACION
module.exports = app;