/**Se crearán cuatro funciones: sumar, restar, multiplicar y dividir.
Además, se proporcionará otra función operación, que recibirá como callback cualquiera de estas tres funciones para ejecutarla.
*/

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0) {
        return NaN;
    }
    return a / b; 
};

const realizarOperacion = (a, b, callback) => {
    console.log("Voy a realizar una operación");
    let resultado = callback(a, b);
    if (!isNaN(resultado)) {
        console.log(`El resultado de la operación es: ${resultado}`);
    } else {
        console.log("No se puede dividir por cero");
    }
};
realizarOperacion(2,5, sumar);
realizarOperacion(2,4, restar);
realizarOperacion(4,8, multiplicar);
realizarOperacion(2,0, dividir);