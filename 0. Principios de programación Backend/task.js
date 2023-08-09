// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas.

let nombre = "Pepe";

let edad = 18;

let precio = 596;

let series = [
    " Naruto ", " Dragon Ball "
]

let peliculas = [
    "Your Name"
]

console.log("Nombre: " + nombre);
console.log("-----------------");
console.log("Edad: " + edad);
console.log("-----------------");
console.log("Precio: " + precio);
console.log("-----------------");
console.log("Series: " + series);
console.log("-----------------");
console.log("Peliculas: " + peliculas);

edad += 1;

series.push(" Hunter x Hunter ")

console.log("-----------------");
console.log("Nueva edad: " + edad);
console.log("-----------------");
console.log(" Nueva serie: " + series);