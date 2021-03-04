const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const callbackDelServidor = (req, res) => {
    //1. obtener url desde el onjeto resquest
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);
    //2. obtener la ruta
    const ruta = urlParseada.pathname;
    //3. quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');
    //3.1 Obtener el metodo http
    const metodo = req.method.toLowerCase();
    //3.2 Obtener variables de quet url
    const { query = {} } = urlParseada;
    //3.3 Obtener heades
    const { headers = {} } = req;
    //3.4 obtener payload, en el caso de habe uno 
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    //3.4.1 ir acomulando la data cunando el request reciba un payload
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    //3.4.2 terminar de actuar datos y decirle al decoder que finalice
    req.on('end', () => {
        buffer += decoder.end();

        //3.5 ordenar la data del reqest
        const data = {
            ruta: rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer
        };
        console.log({ data });
        // 3.6 elegir el manejador dependiendo de la ruta y asignarle funcion que el enrutador tiene
        let handler;
        if (rutaLimpia && enrutador[rutaLimpia]) {
            handler = enrutador[rutaLimpia];
        } else {
            handler = enrutador.noEncontrado;
        }
        //4. ejecutar handle manejador para envia la respuesta 
        if (typeof handler === 'function') {
            handler(data, (statusCode = 200, mensaje) => {
                const respuesta = JSON.stringify(mensaje);
                res.setHeader("Content-Type", "aplication/json")
                res.writeHead(statusCode);
                //linea donde realmente estamos respondiendo a la aplicacion cliente
                res.end(respuesta);

            })
        }

    });
};
const enrutador = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es la /ruta' });
    },
    usuarios: (data, callback) => {
        callback(200, [{ nombre: 'usuario 1' }, { nombre: 'usuario 2' }]);
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'No encontrado' });
    }
}
const server = http.createServer(callbackDelServidor);

server.listen(5000, () => {
    console.log('El servidor esta esta escuchando peticiones en http://localhost:5000/');
});