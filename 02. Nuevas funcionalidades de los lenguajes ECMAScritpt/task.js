/*Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values) */

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let productos1Objetos = Object.keys(objetos[0]);
let productos2Objetos = Object.keys(objetos[1]);

// console.log(productos1Objetos);
// console.log(productos2Objetos);

const productosTotales = [...productos1Objetos, ...productos2Objetos];
// console.log(productosTotales);

const productos = new Set(productosTotales);
console.log("Los productos son: "+ [...productos].join(', '));

let productos1Valores = Object.values(objetos[0]);
let productos2Valores = Object.values(objetos[1]);

const valoresTotales =[...productos1Valores, ...productos2Valores];

const totalObjeto = valoresTotales.reduce((valorInicial, valorAcumulado) => valorInicial+valorAcumulado);

console.log("El total es: " + totalObjeto);

