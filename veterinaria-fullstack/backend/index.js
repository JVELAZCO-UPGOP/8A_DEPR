const http = require('http');
const requestHandle = require("./request-handle");
const server = http.createServer(requestHandle);

server.listen(6000, () => {
    console.log('El servidor esta esta escuchando peticiones en http://localhost:6000/');
});