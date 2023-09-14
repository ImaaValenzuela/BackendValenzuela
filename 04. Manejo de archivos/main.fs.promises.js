const { error } = require('console');
const fs = require('fs');

const archivo = './otroArchivoMas.txt';

const operacionesAsincronas = async() => {

    await fs.promises.writeFile(archivo, "Hola desde promesa");

    let resultado = await fs.promises.readFile(archivo, 'utf-8',);
    console.log(resultado);

    await fs.promises.appendFile(archivo, " tic tac");
    resultado = await fs.promises.readFile(archivo, 'utf-8',);
    console.log(resultado);

    await fs.promises.unlink(archivo);
}

operacionesAsincronas();