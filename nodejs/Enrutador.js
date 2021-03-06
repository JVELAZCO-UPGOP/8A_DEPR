const recursos = require("./recursos");
const mascotas = require("./rutas/mascotas");

module.exports = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es la /ruta' });
    },
    mascotas: mascotas(recursos.mascotas),
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'No encontrado' });
    },
};