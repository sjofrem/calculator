let n1 = "";
let n2 = "";
let operator = "";
let result = "";
let operationFalg = 0;


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const displayOperation = document.getElementById("operation");
const displayResult = document.getElementById("result");
const clear = document.getElementById("clear");


numbers.forEach((button) =>
  button.addEventListener('click', () => populateDisplay(button.textContent))
);
operators.forEach((button) =>
  button.addEventListener('click', () => {
      if(operationFalg==0 && n1 != ""){
        operationFalg = 1;
        populateDisplay(button.textContent);
      }
    })
);
equals.addEventListener("click", () => {
    if(operationFalg == 2){
        operationFalg = 0;
        result = roundResult(operate(operator,n1,n2));
        displayOperation.innerText = `${n1} ${operator} ${n2} =`;
        displayResult.innerText = `${result}`;
        if(result != 0){
            n1 = result;
        }
        else{
            n1 = "";
        }
        n2 = "";
        operator = "";
    }
});
clear.addEventListener("click", () => {
    n1 = "";
    n2 = "";
    operator = "";
    result = "";
    operationFalg = 0;
    displayOperation.innerHTML = "&nbsp";
    displayResult.innerText = "0";
});

function populateDisplay(input){
    if(operationFalg == 0){
        n1 = n1+input;
        displayResult.innerText = `${n1}`;
    }
    else if(operationFalg == 1){
        operator = input;
        displayOperation.innerText = `${n1} ${operator} `;
        displayResult.innerText = `${n1}`;
        operationFalg = 2;
    }
    else if(operationFalg == 2){
        n2 = n2+input;
        displayOperation.innerText = `${n1} ${operator} ${n2}`;
        displayResult.innerText = `${n2}`;
    }

}

function roundResult(result) {
    return Math.round(result * 1000)/1000;
}

function add(n1, n2){
    return n1+n2;
}
function subtract(n1, n2){
    return n1-n2;
}
function multiply(n1, n2){
    return n1*n2;
}
function divide(n1, n2){
    return n1/n2;
}
function operate(operator, n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);
    switch (operator){
        case '+':
            return add(n1,n2);
            break;
        case '-':
            return subtract(n1,n2);
            break;
        case 'x':
            return multiply(n1,n2);
            break;
        case '÷':
            return divide(n1,n2);
    }
}
