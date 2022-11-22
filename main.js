/* Realizaremos una función que corrobore elementos en una lista. */

const mostrarLista = array =>{
    if(array.length == 0) return "La lista esta vacía."

    array.forEach(element =>{
            console.log(element);
    })

    return `La longitud del array es ${array.length}`
}

console.log(mostrarLista([1,2,3]));
console.log(mostrarLista([]));
console.log(mostrarLista(["Imanol", "Zoe"]));

/* Se creará una clase que permitirá llevar cuentas individuales según cada responsable. */

class Contador{

    constructor(responsable){
        this.responsable = responsable
        this.cuentaLocal = 0
    }

    static cuentaGlobal = 0


    getResponsable = () =>{
        return this.responsable
    }

    getCuentaIndividual = () => {return this.cuentaLocal}

    getCuentaGlobal = () => { return Contador.cuentaGlobal}

    contar(){
        this.cuentaLocal++
        Contador.cuentaGlobal++
    }
}

const persona1 = new Contador("P1")
const persona2 = new Contador ("P2")
const persona3 = new Contador("P3")

persona1.contar()
persona1.contar()
persona2.contar()

console.log(`${persona1.getResponsable()} : ${persona1.getCuentaIndividual()}`)
console.log(`${persona2.getResponsable()} : ${persona2.getCuentaIndividual()}`)
console.log(Contador.cuentaGlobal)