// Asincronismo - SetTimeout
const temporizador = (callback) => {
    setTimeout(()=>{
        callback()
    },1000);
};

let operacion = () => console.log("Realizando Operacion");

console.log("Inicio");
temporizador(operacion);
console.log("Fin");
console.log("--------------");

// Asincronismo - SetInterval

let contador = () =>{
    let counter = 0;
    console.log("Realizando operacion");
    let timer = setInterval(() => {
        console.log(counter++);
        if (counter >= 10) {
            clearInterval(timer);
        };
    }, 1000);
};

console.log("Iniciando operacion");
contador();
console.log("Fin de operacionS");

console.log("........................................................................");

