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
        currentNum = ''
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
    previousDisplay.textContent = previousNum + operator + currentNum;
    operate();
    currentNum = currentDisplay.textContent;

})

function operate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    
    if(operator==='+'){
        let added = add(previousNum, currentNum);
        currentDisplay.textContent = added;
    
    }else if(operator==='-'){
        let substracted = substract(previousNum, currentNum);
        currentDisplay.textContent = substracted;
   
    }else if(operator==='x'){
        let mulitplied = multiply(previousNum, currentNum);
        currentDisplay.textContent = mulitplied;
     
    }else if(operator==='÷'){
        let divided = divide(previousNum, currentNum);
        currentDisplay.textContent = divided;
 
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


