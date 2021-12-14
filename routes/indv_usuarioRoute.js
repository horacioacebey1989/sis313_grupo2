const Usuario = require("../model/indv_usuario");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/registro", async(req, res) => {
    try {
        //GENERAMOS NUEVA CONTRASEÑA CON BCRYPT
        const salt = await bcrypt.genSalt(10);
        const hashedusu_contrasena = await bcrypt.hash(req.body.usu_contrasena, salt);

        //CREMOS AL NUEVO USUARIO
        const newUsuario = new Usuario({
            usu_nombre: req.body.usu_nombre,
            usu_email: req.body.usu_email,
            usu_contrasena: hashedusu_contrasena,
        });

        //GUARDAMOS EL USUARIO Y RESPONDEMOS
        const usuario = await newUsuario.save();
        res.status(200).json(usuario._id);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async(req, res) => {
    try {
        //ENCONTRARREMOS AL USUARIO PARA EL LOGIN
        const usuario = await Usuario.findOne({ usu_nombre: req.body.usu_nombre });
        !usuario && res.status(400).json("Usuario/Email o Contraseña incorrecta, revise sus credenciales");

        //VALIDAMOS LA CONTRASEÑA
        const validusu_contrasena = await bcrypt.compare(
            req.body.usu_contrasena,
            usuario.usu_contrasena
        );
        !validusu_contrasena && res.status(400).json("Usuario/Email o Contraseña incorrecta, revise sus credenciales");

        //send response
        res.status(200).json({ _id: usuario._id, usu_nombre: usuario.usu_nombre });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;