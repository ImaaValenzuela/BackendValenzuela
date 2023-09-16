/* Crear un proyecto basado en express js, el cual cuente con un servidor que escuche en el puerto 8080. Además de configurar los siguientes endpoints:

El endpoint del método GET a la ruta  ‘/bienvenida’ deberá devolver un html con letras en color azul, en una string, dando la bienvenida.
El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido,edad, correo}*/


import express from 'express';

const app = express();

app.get ('/bienvenida', (req, res) => {
    res.send("<h1 style= 'color: blue'>Bienvenido a mi servidor</h1>")
});

app.get('/usuario', (req,res) => {
    res.send({nombre: "Ima", apellido:"Valen",edad:19, correo:"micorreo@lo.com"})
});

app.listen(8080, console.log("El servidor esta corriendo"));