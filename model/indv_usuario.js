const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    usu_nombre: { type: String, require: true, max: 20, unique: true, },
    estado: Boolean,
    usu_email: { type: String, require: true, max: 50, unique: true, },
    usu_contrasena: { type: String, require: true, min: 5 }
}, { timestamps: true });

module.exports = mongoose.model("Usuario", usuarioSchema);