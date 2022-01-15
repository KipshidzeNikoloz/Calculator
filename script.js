

let numbers = [];


//HTML Eventlisteners

document.querySelectorAll(".number").forEach(function(ele){
    ele.addEventListener('click', function(e){
        var dataKey = this.dataset.num;  
        numbers.push(dataKey);
        displayUpdate();
    });
})

function displayUpdate(){
    if (Array.isArray(numbers) && !numbers.length) {
        numberDisplay.textContent = '0';
    } else{ 
        var numbersToDisplay = numbers.join("");
        numberDisplay.textContent = numbersToDisplay;
    }
    
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearNumbers)
const removeLast = document.querySelector('.removeLast')
removeLast.addEventListener('click', removeLastNumber)
const numberDisplay = document.querySelector('.numberDisplay')
const additionButton = document.querySelector('.addition')
const subtractionButton = document.querySelector('.subtraction')
const multiplicationButton = document.querySelector('.multiplication')
const divisionButton = document.querySelector('.division')
const enterButton = document.querySelector('.enter')
displayUpdate();


function clearNumbers(){
    numbers = [];
    displayUpdate();
}

function removeLastNumber(){
    numbers.pop();
    displayUpdate();
}

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

