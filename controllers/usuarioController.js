'use strict'

// LOGIN

function loginUsuario(req, res) {
    var params = req.body;

    usuario.findOne({ nombre: params.nombre }, (err, usuarioCheck) => {
        if (err) return res.status(500).send({ message: 'Error en la peticion' });
        if (usuarioCheck) {
            return res.status(200).send({
                usuario: usuarioCheck,
                token: jwt.createToken(usuarioCheck)
            })
        } else {
            return res.status(404).send({ message: 'No ha encontrado el usuario!' })
        }
    });

}


// UPDATE

module.exports = {
    addUsuario,
    loginUsuario
}