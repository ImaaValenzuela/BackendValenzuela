const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/saludo', (request, response) =>{
    response.send('Saludos desde Express')
})

app.get('/bienvenida', (request, response) =>{
    response.send('<h1 style="color:blue">Bienvenido </h1>')
})

app.get('/usuario', (request, response)=>{
    response.send({nombre:"Imanol", apellido:"Valenzuela", mail: "imanolvalenzuela03@gmail.com", edad: 18})
})

app.listen(8080, () => console.log("El servidor esta corriendo"))