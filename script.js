function addition(...num) {
    return num.reduce((a, b) => a + b)
}
function subtraction(...num) {
    return num.reduce((a, b) => a - b)
}
function multiply(...num) {
    return num.reduce((a, b) => a * b);
  };
function divide(...num) {
    return num.reduce((a, b) => a / b)
}

function operator(operate, a, b) {
    if (operate === '+') return addition(a, b);
    else if (operate === '-') return subtraction(a, b);
    else if (operate === '*') return multiply(a, b)
    else if (operate === '/') return divide(a, b)
    else return NaN
}
