const http = require('http');
const requestHandle = require("./request-handle");
const recursos = require("./recursos");

global.recursos = recursos;


const server = http.createServer(requestHandle);

server.listen(5000, () => {
    console.log('El servidor esta esta escuchando peticiones en http://localhost:5000/');
});