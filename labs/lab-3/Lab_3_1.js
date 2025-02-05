const {
    countEvenAndOddNum,
    printArray
} = require('../UtilMethod');


let intArr = [1,2,3,4,5,6];
let evenOddCount = countEvenAndOddNum(intArr);

console.log(`Even numbers: ${evenOddCount.even}`);
console.log(`Even number are: ${printArray.}`); // --> here
console.log(`Odd numbers: ${evenOddCount.odd}`);
console.log(`Odd number are: ${printArray.}`); // --> here

