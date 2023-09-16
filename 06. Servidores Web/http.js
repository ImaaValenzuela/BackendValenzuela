import http from 'http';

const server = http.createServer((req, res) => {
    res.end("Primer hola mundo desde el backend!");
});

server.listen(8080, ()=>{
    console.log("Escuchando desde el puerto 8080");
});
