/* El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Edad
Curso
El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios*/

const fs = require('fs');

class ManagerUsuarios{
    constructor(filename){
        this.filename = filename;
        this.format = 'utf-8';
    }

    crearUsuario = async (nombre, apellido, edad, curso) => {
        return this.obtenerUsuario()
            .then(usuarios => {
                usuarios.push({nombre,apellido,edad,curso})
                return usuarios
            })
            .then(usuariosNuevos => fs.promises.writeFile(this.filename, JSON.stringify(usuariosNuevos)))
    }

    obtenerUsuario = async () => {
        return fs.promises.readFile(this.filename, this.format)
        .then(contenido => JSON.parse(contenido))
        .catch( error => {
            console.log(error);
            return [];
        })
    }
};

async function run(){
    const manager = new ManagerUsuarios('Usuarios.json');
    await manager.crearUsuario("Imanuel", "Venezuela", 19, "Backend");
    console.log(await manager.obtenerUsuario());
};

run();