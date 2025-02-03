// const NumberSupportFunctions = require('./UtilMethod');

// Destructure
const{
    isEvenNumber,
    teo
} = require('./UtilMethod');

// Get an User input then check if it's even or odd num
let userInput = getUserInput();
let isOddNumber_ = teo(userInput);

if(isOddNumber_){
    console.log(`The number ${userInput} is an odd number`);
}else{
    console.log(`The number ${userInput} is an even number`);
    
}

function getUserInput(){
    return 3;
}