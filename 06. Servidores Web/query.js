import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/query', (req,res)=> {
    let consultas = req.query;
    let {nombre, apellido, edad} = req.query;
    res.send(consultas);
});

app.listen(8080, () => console.log("Escuchando..."));