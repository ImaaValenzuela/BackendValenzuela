const suma = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 == 0 || num2 == 0) reject('Operación innecesaria')
        else resolve(num1 + num2)
    })
}
const resta = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 == 0 || num2 == 0) reject('Operación inválida')
        else {
            const resultado = num1 - num2
            if (resultado < 0) reject("La calculadora sólo puede devolver valores positivos")
            else resolve(resultado)
        }
    })
}
const multiplicacion = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 < 0 || num2 < 0) reject('Operacion invalida')
        else {
            const producto = num1 * num2
            if (producto < 0) reject("La calculadora sólo puede devolver valores positivos")
            else resolve(producto)
        }
    })
}

const division = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 == 0) return reject("No se puede dividir entre 0")
        return resolve(num1 / num2)
    })
}

async function calculos() {
    try {
        console.log(await suma(20, 4))
        console.log(await resta(44, 17))
        console.log(await multiplicacion(2, 0))
        console.log(await division(70, 5))
    } catch (error) {
        console.error("ERROR: ",error);
    }
}

calculos()