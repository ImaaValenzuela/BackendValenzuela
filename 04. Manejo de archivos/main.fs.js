// FileSystem

const fs = require('fs');

const filename = 'ejemplo.txt';

fs.writeFileSync(filename, "Escribiendo mi primer archivo, POR FIN!");

if(fs.existsSync(filename)){
    console.log("El archivo existe y contiene:\n");
    let contenido = fs.readFileSync(filename, 'utf-8');
    console.log(contenido);

    fs.appendFileSync(filename, "\nY agrego mas texto B)");
    contenido = fs.readFileSync(filename, 'utf-8');
    console.log(contenido);

    fs.unlinkSync(filename, 'utf-8')
    console.log("Archivo eliminado");
} else{
    console.log("El archivo no existe");
};