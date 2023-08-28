const operatorButtons = document.querySelectorAll('.operatorBtn');
const numberButtons = document.querySelectorAll(".numberBtn");
const clearAllBtn = document.querySelector('.clearAllBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const result = document.querySelector('.result');
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');

let operator = '';
let previousNum = '';
let currentNum = '';

clearAllBtn.addEventListener('click', () => {
    clearAll();
})

function clearAll(){
    currentNum = '';
    operator = '';
    previousNum = '';
    currentDisplay.textContent = currentNum;
    previousDisplay.textContent = previousNum;
}

deleteBtn.addEventListener('click', () => {
    deleteLast();
})

function deleteLast(){
    if(currentNum.length === 1){
        currentNum = '';
        currentDisplay.textContent = currentNum;
    }else{
        currentNum = currentNum.substring(0, currentNum.length - 1);
        currentDisplay.textContent = currentNum;
    }
}

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNum(e.target.textContent)
    })
});

function handleNum(number){
    currentNum += number;
    currentDisplay.textContent = currentNum;
}

operatorButtons.forEach((operator)=>{
    operator.addEventListener('click', (e) =>{
        handleOperator(e.target.textContent);
    })
})

function handleOperator(operatorInput){

    operate();
    currentNum = currentDisplay.textContent;

    operator = operatorInput;
    previousNum = currentNum;
    currentNum = '';

    currentDisplay.textContent = currentNum;
    previousDisplay.textContent = previousNum + operator;

    
}

result.addEventListener('click', ()=>{
    if(currentNum === "" && previousNum === ""){
        currentNum = "";
        previousNum = "";
    }else if(currentNum !=="" && previousNum === ""){
        currentDisplay.textContent = currentNum;
    }else if(currentNum === "" && previousNum !== ""){
        previousDisplay.textContent = "";
        currentDisplay.textContent = previousNum;
    }else{
        previousDisplay.textContent = previousNum + operator + currentNum;
        operate();
    }
})

function operate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    
    if(operator==='+'){
        let added = add(previousNum, currentNum);
        currentDisplay.textContent = roundNumber(added);
    
    }else if(operator==='-'){
        let substracted = substract(previousNum, currentNum);
        currentDisplay.textContent = roundNumber(substracted);
   
    }else if(operator==='x'){
        let mulitplied = multiply(previousNum, currentNum);
        currentDisplay.textContent = roundNumber(mulitplied);
     
    }else if(operator==='÷'){
        if(currentNum===0){
            currentDisplay.textContent = 'Error'; 
        }else{
        let divided = divide(previousNum, currentNum);
        currentDisplay.textContent = roundNumber(divided);
        }
    }

}


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

function roundNumber(num) {
    return Math.round(num*100000) / 100000;
}
/*
keyboard input 
*/
document.addEventListener('keydown', getKeyboardInput);

function getKeyboardInput(e){
    e.preventDefault();
    if(e.key >= "0" && e.key <= "9"){
        handleNum(e.key);
    }else if(e.key ==="+" || e.key === '-' || e.key === '*' || e.key === '/'){
        handleOperator(e.key);
    }else if(e.key==='Enter'){
        result.click(); // Trigger the same action as clicking the "=" button
    }else if(e.key==='Backspace'){
        deleteLast();
    }else if(e.key==='Escape'){
        clearAll();
    }
}