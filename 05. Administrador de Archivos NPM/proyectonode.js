/*Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.*/

const frecuencia = {};

for (let i = 0; i < 10000; i++) {
    const numero = parseInt(Math.random() * 20) + 1;
    if (!frecuencia[numero]) {
        frecuencia[numero] = 1;
    } else {
        frecuencia[numero]++;
    }
}

console.log(frecuencia);
