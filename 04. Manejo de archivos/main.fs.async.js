const { log } = require('console');
const fs = require('fs');

const archivo = 'otroEjemplo.txt';

fs.writeFile(archivo, 'Hola', (error) =>{
    if(error) return console.log("Error al escribir el archivo");

    fs.readFile(archivo, 'utf-8', (error, resultado) =>{
        if(error) return console.log("Error al actualizar el archivo");
        console.log(resultado);
        fs.appendFile(archivo, " Buenas", (error)=>{
            if (error) return console.log("Error al actualizar el archivo");
            fs.readFile(archivo, 'utf-8', (error, resultado) =>{
                if(error) return console.log("Error al leer el archivo");
                console.log(resultado);
                fs.unlink(archivo, (error) =>{
                    if(error) return console.log("No se pudo eliminar el archivo");
                });
            });
        });
    });
});