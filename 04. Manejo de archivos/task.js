/*Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola. 
Utilizar el módulo fs y sus operaciones de tipo callback.
*/

const fs = require('fs');

const archivo = './fechayhora.txt';

let fechaActual = new Date().toLocaleDateString();
let horaActual = new Date().toLocaleTimeString();

fs.writeFile(archivo, fechaActual, (error) => {
    if (error) return console.log("No se pudo escribir el archivo");
    fs.readFile (archivo, 'utf-8', (error) =>{
        if(error) return console.log("No se pudo leer el archivo");
        fs.appendFile(archivo, " " + horaActual, (error) =>{
            if(error) return console.log("No se pudo agregar elemento al archivo");
            fs.readFile(archivo, 'utf-8', (error, resultado) =>{
                if(error) return console.log("No se pudo leer el archivo");
                console.log(resultado);
            })
        })
    })
});