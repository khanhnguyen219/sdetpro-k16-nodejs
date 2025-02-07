const {
    countEvenAndOddNum,
    printArray
} = require('../UtilMethod');


let intArr = [2,3,4,5,6];
let evenOddCount = countEvenAndOddNum(intArr);

console.log(`Even numbers: ${evenOddCount.even} number(s)`);
console.log(`Even number are: ${printArray(evenOddCount.evenArray)}`);
console.log(`Odd numbers: ${evenOddCount.odd} number(s)`);
console.log(`Odd number are: ${printArray(evenOddCount.oddArray)}`);

