// HTML References  


const clear = document.querySelector('.clear');
const removeLast = document.querySelector('.removeLast')
const numberDisplay = document.querySelector('.numberDisplay')
const enter = document.querySelector('.enter')
const lastNumberDisplay = document.querySelector('.lastNumberDisplay')
const enterButton = document.querySelector('.enter')
const operators = document.querySelectorAll('.operator')
const decimal = document.querySelector('.decimal')


// Starting state 


let firstOperand = '';
let secondOperand = '';
let activeOperation = null;
let moveNumberUp = false
numberDisplay.textContent = '0';



// Number and Operator Eventlisteners

document.querySelectorAll(".number").forEach(function(ele){
    ele.addEventListener('click', function(e){
        if (numberDisplay.textContent != 'Why would you do this') {
            appendNumber(e.target.textContent)
            return;
        }
        clearDisplay();
        appendNumber(e.target.textContent)
    });
})

document.querySelectorAll(".operator").forEach(function(ele){
    ele.addEventListener('click', function(e){
           if (numberDisplay.textContent != 'Why would you do this') 
           setOperation(e.target.textContent);
    });
})

// DISPLAY OPERATIONS


const appendNumber = (num) => {
    if (numberDisplay.textContent === '0' || moveNumberUp)  //checks if 0 or  lastNumberDisplay is displayed 
         displayUpdate()
    numberDisplay.textContent += num;
}

const displayUpdate = () => {
    numberDisplay.textContent = ''
    moveNumberUp = false;
}

const clearDisplay = () => {
    numberDisplay.textContent = '0';
    lastNumberDisplay.textContent = '';     
    firstOperand = '';          //
    secondOperand = '';         //  resets everything
    activeOperation = null;     //
    
}

const removeLastNumber = () => {
    if (numberDisplay.textContent === 'Why would you do this') {    //snark
        clearDisplay();
        return;
    } 
    numberDisplay.textContent = numberDisplay.textContent.toString().slice(0, -1);    
}


const appendDecimal = () => {
    if (moveNumberUp) {
        displayUpdate();
    }
    if (numberDisplay.textContent === '') {
        numberDisplay.textContent = '0'
    }
    if (numberDisplay.textContent.includes('.')) return;
    
    numberDisplay.textContent += '.'
}

// MATH OPERATIONS

const setOperation = (operator) => {
    if (activeOperation !== null) operate()
    firstOperand = numberDisplay.textContent;
    activeOperation = operator;
    lastNumberDisplay.textContent = `${firstOperand} ${activeOperation}`
    moveNumberUp = true;
}

const operate = () => {
    if (activeOperation === null || moveNumberUp) return; 
    if (activeOperation === '÷' && numberDisplay.textContent === '0') {
        numberDisplay.textContent = 'Why would you do this';
        lastNumberDisplay.textContent = ''
        return;
    }
    secondOperand = numberDisplay.textContent;
    numberDisplay.textContent = rounding(operator(activeOperation, firstOperand, secondOperand))    
    lastNumberDisplay.textContent = `${firstOperand} ${activeOperation} ${secondOperand} =`
    activeOperation = null;
}

const addition = (a, b) => {
    return a + b
}
const subtraction = (a, b) => {
    return a - b
}
const multiply = (a, b) => {
    return a * b
};
const divide = (a, b) => {
    return a / b
}

const operator = (operator, a, b) => {
    a = Number(a)
    b = Number(b)

    switch (operator) {
        case '+':
            return addition(a, b)
        case '-':
            return subtraction(a, b)
        case '*':
            return multiply(a, b) 
        case '÷':
            if (b === 0) return null
            else return divide(a, b)    
        default: 
            return null;       
    }
}

const rounding = (num) => {
    return Math.round(num * 10000) / 10000
}


// Event Listeners 
clear.addEventListener('click', clearDisplay);
removeLast.addEventListener('click', removeLastNumber);
enter.addEventListener('click', operate)
decimal.addEventListener('click', appendDecimal)

// Keyboard Integration 

window.addEventListener("keydown", function (e) {
    setOperation(keyboardOperators(e.key));
    
    switch (e) {
        case '+':
            return '+';
            
    }

})


//     if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
//     if (e.key === '.') appendDecimal;
//     if (e.key === '=' || e.key === 'Enter') operate;
//     if (e.key === 'Backspace') removeLastNumber;
//     if (e.key === 'Escape') clearDisplay;
//     if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
//       setOperation(keyboardOperators(e.key))
// })
// 
const keyboardOperators = (operator) => {
    if (operator.defaultPrevented) {
        return; 
    }
    switch (operator) {
        case "+":
            return '+';
        case '-':
            return '-';
        case '*':
            return '*';
        case '/':
            return '/';
    }
 operator.preventDefault();
}