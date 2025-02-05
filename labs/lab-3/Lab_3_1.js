const {
    countEvenAndOddNum
} = require('../UtilMethod');


let intArr = [1,2,3,4,5,6];
let evenOddCount = countEvenAndOddNum(intArr);

console.log(`Even numbers: ${evenOddCount.even}`);
console.log(`Even number are: ${evenOddCount.evenArray}`);
console.log(`Odd numbers: ${evenOddCount.odd}`);
console.log(`Odd number are: ${evenOddCount.oddArray}`);

