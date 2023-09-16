import express from 'express';

const app = express();

app.get('/bienvenida/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.send(`Bienvenid@, ${req.params.nombre}`);
});

app.get('/datos/:nombre/:apellido',(req, res) => {
    console.log(req.params.nombre + " " + req.params.apellido);
    res.send(`Tu nombre completo es ${req.params.nombre} ${req.params.apellido}`);
});

app.listen(8080, () => console.log("Escuchando el puerto 8080"));