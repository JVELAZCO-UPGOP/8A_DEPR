module.exports = function consultasHandler({ consultas, veterinarios, mascotas }) {
    return {
        get: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                console.log("handler consultas", { data });
                if (consultas[data.indice]) {
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, {
                    mensaje: `consulta con indice ${data.indice} no encontrado`,
                });
            }
            const consultasConRelaciones = consultas.map((consulta) => ({
                ...consulta,
                mascota: {...mascotas[consulta.mascota], id: consulta.mascota },
                veterinario: {
                    ...veterinarios[consulta.veterinario],
                    id: consulta.veterinario,
                },
            }));
            callback(200, consultasConRelaciones);
        },
        post: (data, callback) => {
            let Nuevaconsulta = data.payload;
            Nuevaconsulta.fechaCreacion = new Date();
            Nuevaconsulta.fechaEdicion = null;
            consultas = [...consultas, Nuevaconsulta]
            callback(201, Nuevaconsulta);

        },
        put: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (consultas[data.indice]) {
                    const { fechaCreacion } = consultas[data.indice];
                    consultas[data.indice] = {...data.payload, fechaCreacion, fechaEdicion: new Date() };
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, {
                    mensaje: `consultas con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
        delete: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (consultas[data.indice]) {
                    consultas = consultas.filter(
                        (_consulta, indice) => indice != data.indice
                    );
                    return callback(204, { mensaje: 'elemento con indice ${data.indice} elimimado' });
                }
                return callback(404, {
                    mensaje: `duenos con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
    };
};