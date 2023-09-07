//                  ES7
// Exponential **

let base = 5;
let exponente = 3;
console.log(("El resultado es: ") + (base**exponente) );


console.log("---------------------------");
// Includes -> Corrobora si un elemento existe dentro de un arreglo

let nombres = ["Ima","Jose","Ana","Zoe"]

if(nombres.includes("Jose")){console.log("Jose esta en nombres");} else(console.log("No existe"));

console.log("---------------------");
//                  ES8

// Entries, keys y values

const carrito = {
    pera: 500,
    manzana: 700,
    anana: 840
}

let arrayCarrito = Object.entries(carrito);
console.log(arrayCarrito);

let propiedadesCarrito = Object.keys(carrito);
console.log(propiedadesCarrito);

let valoresCarrito = Object.values(carrito);
console.log(valoresCarrito);

let totalCarrito = valoresCarrito.reduce((valorInicial, valorAcumulado) => valorInicial+valorAcumulado);

console.log(totalCarrito);

console.log("------------");

//                  ES9

// Spread operator

let objeto1 = {
    propiedad: 1,
    propiedasSec: "a",
    propiedadTres: true
};

let objeto2 = {
    propiedad: 2,
    propiedasSec: "b"
};


let {propiedad, propiedasSec} = objeto1;
console.log(propiedad, propiedasSec);

let objeto3 = {...objeto1, ...objeto2};
console.log(objeto3);

// Rest operator

let objeto4 = {
    a : 1,
    b : 2,
    c : 3,
};

let {a, ...rest} = objeto4;
console.log(rest);

console.log("-------------");
//                  ES10

// Trim

let cadenaLarga = "                     LOL!";
console.log(cadenaLarga);
console.log(cadenaLarga.trim());

let chat = [];
let mensaje = '    ';

if(mensaje.trim().length > 0){
    chat.push(mensaje.trim());
} else{
    console.log("Mensaje vacio. Por favor escriba algo");
}

// Flat

let muchosNumeros = [78,[45,4],8,[1,3],4,88];

console.log(muchosNumeros.flat());

console.log("-----------------------");
//                  ES11

// Nullish

let variablePrueba = 0;

let variableAsignable = variablePrueba ?? "Sin valor";
console.log(variableAsignable);

console.log("-------------------");

// Variable privada

class Persona{
    #nombrecompleto;
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#nombrecompleto = `${this.nombre} ${this.apellido}`;
    };

    getNombreCompleto = () =>{
        return this.#nombrecompleto;
    };
}

let instancia1 = new Persona("Imanuelson", "Baldeysuela");

console.log(instancia1.getNombreCompleto());

console.log("---------------");