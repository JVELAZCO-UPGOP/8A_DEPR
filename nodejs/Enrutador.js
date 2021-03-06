const recursos = require("./recursos");
const mascotas = require("./rutas/mascotas");
const veterinarios = require("./rutas/veterinario");

module.exports = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es la /ruta' });
    },
    mascotas: mascotas(recursos.mascotas),
    veterinarios: veterinarios(recursos.veterinarios),
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'No encontrado' });
    },
};