const moment = require('moment');

const now = moment();

console.log(now.format("DD/MM/YYYY"));

const bday = moment("2003-12-14");

console.log(bday.format("DD/MM/YYYY"));


if (bday.isValid()){
    console.log("Is a valid format");
    const days= now.diff(bday, 'days');
    console.log(days);
} else console.log("Invalid format");
