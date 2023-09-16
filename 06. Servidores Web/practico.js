import express from 'express';

const app = express();

const usuarios = [
    {id:"1", nombre:"imanol",edad:"19"},
    {id:"2", nombre:"josefina", edad:"18"}
];

app.get('/', (req, res) =>{
    res.send({usuarios});
});

app.get('/:idUsuario', (req,res) => {
    let idUsuario = req.params.idUsuario;
    let usuario = usuarios.find(u=>u.id===idUsuario);
    if(!usuario) return res.send({error: "Usuario no encontrado"});
    res.send({usuario});
});

app.listen(8080, console.log("Escuchando..."));