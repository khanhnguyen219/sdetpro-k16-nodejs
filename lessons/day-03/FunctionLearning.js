// DRY: Don't Repeat Yourself
// Single Reponsibility: Tính đơn nhiệm

// function name: 
// camelCase 
// Declare a function
const readline = require('readline-sync');

// Method 01: [ Function Declaration ] method hoisting
let userInputNum = getUSerInputNum();
// let inputNumber = convertToNumber(userInputNum);
eavluaEvenOrOddNumber(userInputNum);

function getUSerInputNum(number){
    let numberInput = Number(readline.question("Enter the number:  "));
    console.log(numberInput);
    return numberInput; 
}

// function convertToNumber(str ){
//     let number = Number(str);
//     if(isNaN(number)){
//         console.log("Không phải kiểu number, nhập lại");
//         return null;
//     }
//     return number;
// }

function eavluaEvenOrOddNumber(number){
    if(number === null){
        return null;
    }else if(number % 2 ===0 ){
        console.log(`${number} is even number`);
        
    }else{
        console.log(`${number} is odd number`);
        
    }
}





// console.log(returnValue);
// function functionName(){
//     return 1;
// }

// // Method 02: [ Function Expression ] method | No hoisting
// let sum = addNumber(1, 2);
// const addNumber = function(firstNumber, secondNumber){
    
//     return firstNumber + secondNumber;
// }
