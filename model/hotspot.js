"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var hotspot = Schema({

    usu_nombre: { type: String, require: true },
    estado: Boolean,
    titulo: { type: String, require: true, min: 3 },
    desc: { type: String, require: true, min: 3 },
    lat: { type: Number, require: true },
    long: { type: Number, require: true },
}, { timestamps: true });

module.exports = mongoose.model("hotspot", hotspot);