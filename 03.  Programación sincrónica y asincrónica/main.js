//          Funciones
// Callbacks => Pasar como parametro una funcion a otra funcion
let valores = [1,2,3,4];

let nuevosValores = valores.map(x=>x+1);
console.log(nuevosValores);

let otrosValores = valores.map(x=>x*10);
console.log(otrosValores);

const funcionPar = (valores) =>{
    if(valores%2===0){
        return valores
    } else{return "No es par";};
};

const evaluacionPares = valores.map(funcionPar);
console.log(evaluacionPares);
console.log("-------------------");
// Promesas

const dividir = (dividendo, divisor) => {
    return new Promise ((resolve, reject) => {
        if (divisor === 0){
            reject("No se puede dividir por cero");
        } else{
            resolve(dividendo/divisor);
        }
    });
};

dividir(10,0)
    .then(resultado =>{
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });
dividir(10,2)
    .then(resultado =>{
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });

console.log("------------------------------");


// Async/Await

const divisionAsincrona = async() => {
    try{
        let resultado = await dividir(10,5);
        console.log(resultado);
    }
    catch (error){
        console.log(error);
    };
};

divisionAsincrona();