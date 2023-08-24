const operatorButtons = document.querySelectorAll('.operatorBtn');
const numberButtons = document.querySelectorAll('.numberBtn');
const clearAllBtn = document.querySelector('.clearAllBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const result = document.querySelector('.result');
const previousInput = document.querySelector('.previous')

let displayValue;

/*input display*/ 




function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator){
    if(operator=='+'){
        return add(num1, num2)
    }else if(operator=='-'){
        return substract(num1, num2)
    }else if(operator=='*'){
        return multiply(num1, num2)
    }else if(operator=='/'){
        return divide(num1, num2)
    }
}


