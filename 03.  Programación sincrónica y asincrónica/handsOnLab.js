/* Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
Definir función suma:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
Definir función resta:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
Definir una función multiplicación:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
Definir la misma función división utilizada en esta clase.
Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch
 */

const suma = (sumando1, sumando2) =>{
    return new Promise ((resolve, reject) => {
        if (sumando1 === 0 || sumando2 === 0) {
            reject("Operación innecesaria");
        } else if (sumando1 + sumando2 < 0) {
            reject("La calculadora sólo debe devolver valores positivos");
        } else resolve(sumando1 + sumando2);
    });
};

const resta = (minuendo, sustraendo) => {
    return new Promise ((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0){
            reject ("Operacion innesecaria")
        } else if (minuendo - sustraendo < 0){
            reject ("La calculadora sólo debe devolver valores positivos");
        } else resolve (minuendo - sustraendo);
    });
};

const multiplicación = (factor1, factor2) => {
    return new Promise ((resolve, reject) => {
        if (factor1 * factor2 < 0) {
            reject ("La calculadora sólo puede devolver valores positivos");
        } else resolve (factor1*factor2);
    });
}

const division = (dividendo, divisor) => {
    return new Promise ((resolve, reject) => {
        if (divisor === 0){
            reject("No se puede dividir por cero");
        } else{
            resolve(dividendo/divisor);
        }
    });
};

async function calculos (){
    try{
        console.log(await suma(10,5));
        console.log(await resta(7,-4));
        console.log(await multiplicación(-8,-4));
        console.log(await division(8,3));
        console.log(await division(8,0));
        // console.log(await multiplicación(8,-4));
        // console.log(await suma(-10,5));
        // console.log(await suma(0,5));
        // console.log(await resta(7,14));
    } catch (error) {
        console.log(error);
    };
}

calculos();