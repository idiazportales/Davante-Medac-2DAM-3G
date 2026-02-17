const suma = require("./suma");
const resta = require("./resta");
const multiplicacion = require("./multiplicacion");
const division = require("./division");

let a = 10;
let b = 5;

console.log("Número A:", a);
console.log("Número B:", b);
console.log("------------------");

console.log("Suma:", suma(a, b));
console.log("Resta:", resta(a, b));
console.log("Multiplicación:", multiplicacion(a, b));
console.log("División:", division(a, b));
