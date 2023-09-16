import express from 'express';

const app = express();
const usuarios = [
    {id:"1", nombre:"ima", genero:"M"},
    {id:"2", nombre:"brian", genero:"M"},
    {id:"3", nombre:"fabri", genero:"M"},
    {id:"4", nombre:"taiio", genero:"M"},
    {id:"5", nombre:"zoe", genero:"F"},
];

app.get('/', (req,res) => {
    let genero = req.query.genero;
    if(!genero||(genero!=="M"&&genero!=="F")) return res.send({usuarios});
    let usuariosFiltrados = usuarios.filter(user => user.genero === genero);
    res.send({usuariosFiltrados});
});

app.listen(8080, () => console.log("Escuchando..."));