// MULTIPLICAR  
function multiplicacion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: ambos valores deben ser números";
    }
    return a * b;
}

// Ejemplos
console.log(multiplicacion(3, 5));  // 15
console.log(multiplicacion("3", 5)); // Error
