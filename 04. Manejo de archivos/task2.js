/* Muestre por consola el objeto info luego de leer el archivo
Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
Incluir el manejo de errores (con throw new Error)
Utilizar el módulo promises de fs dentro de una función async/await y utilizar JSON.stringify + JSON.parse para poder hacer las transformaciones json->objeto y viceversa
*/

const fs = require('fs');

const archivo = './package.json';
const archivoInfo = './info.json';

const info = {
    "contenidoStr": "(contenido del archivo leído en formato string)",
    "contenidoObj": "(contenido del archivo leído en formato objeto)",
    "size": "(tamaño en bytes del archivo)"
}


const operaciones = async() => {
    try{
        const contenido = await fs.promises.readFile(archivo, 'utf-8');
        const contenidoJson = JSON.parse(contenido);
        console.log(contenidoJson);
        contenidoJson.info = info;
        await fs.promises.writeFile(archivo, JSON.stringify(contenidoJson, null, "\t"));
        console.log("Archivo actualizado");
        await fs.promises.writeFile(archivoInfo, JSON.stringify(info, null, "\t"));
        console.log("Json creado");
    }catch (error){
        console.log(error.message);
    }
};

operaciones();