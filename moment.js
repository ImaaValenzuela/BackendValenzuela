const moment = require('moment');



const fechaActual = moment();



const fechaDeNacimiento = moment({

year: 2003,

month: 11,

day: 14

});



const esFechaValida = fechaDeNacimiento.isValid();



const dias = fechaActual.diff(fechaDeNacimiento, 'days');



console.log('fechaActual: ', fechaActual.format());



console.log('fechaDeNacimiento: ', fechaDeNacimiento.format('DD/MM/YYYY'));



console.log('esFechaValida: ', esFechaValida);



console.log('días de diferencia: ', dias);