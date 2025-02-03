// Support function
// Service function - Utility Function

// 3: argument
let isEvenNumber_ = isEvenNumber(3, 2);
console.log(`Is 3 even number: ${isEvenNumber_}`);

// number: parameter
function isEvenNumber(number){
    // Details implementations | implementation
    console.log(number);
    return number % 2 === 0;
}

// number: parameter
const isOddNumber = function (number){
    return number % 2 !== 0;
}

// Common JS Module
module.exports = {
    teo: isEvenNumber, 
    ti: isOddNumber
}