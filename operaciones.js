let display = document.getElementById("display");
let a = null;
let operacion = null;

// Escribir números
function agregarNumero(num) {
    if (display.textContent === "0") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

// Limpiar:
function limpiar() {
    display.textContent = "0";
    a = null;
    operacion = null;
}

function sumar(a, b) { 
    return a + b; 
}

function restar(a, b) { 
    return a - b; 
}

function multiplicacion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "Error";
    return a * b;
}

function division(a, b) {
    if (b === 0) return "Error";
    return a / b;
}

function usarOperacion(op) {
    a = Number(display.textContent);
    operacion = op;
    display.textContent = "0";
}

// Calcular con los números elegidos:
function calcular() {
    let b = Number(display.textContent);
    let resultado;

    switch (operacion) {
        case 'sumar': resultado = sumar(a, b); break;
        case 'restar': resultado = restar(a, b); break;
        case 'multiplicacion': resultado = multiplicacion(a, b); break;
        case 'division': resultado = division(a, b); break;
        default: return;
    }

    display.textContent = resultado;
    a = resultado;
    operacion = null;
}