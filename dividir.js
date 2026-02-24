function division(a, b) {
    if (b === 0) {
        return "Error: No es posible dividir entre cero";
    }
    return a / b;
}

module.exports = division;