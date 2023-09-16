import express from 'express';


const app = express();

app.get('/saludo', (req,res) =>{
    res.send("Primer hola mundo desde express")
});

app.listen(8080, () => console.log("Escuchando desde la ruta saludo"));