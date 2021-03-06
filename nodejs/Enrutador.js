const recursos = require("./recursos");
const mascotas = require("./rutas/mascotas");
const veterinarios = require("./rutas/veterinario");
const duenos = require("./rutas/duenos");
const consultas = require("./rutas/consultas");

module.exports = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es la /ruta' });
    },
    mascotas: mascotas(recursos.mascotas),
    veterinarios: veterinarios(recursos.veterinarios),
    duenos: duenos(recursos.duenos),
    consultas: consultas(recursos.consultas),
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'No encontrado' });
    },
};