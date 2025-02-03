const {
    countEvenAndOddNum
} = require('../UtilMethod');


let intArr = [1, 2, 3, 4, 5];
let evenOddCount = countEvenAndOddNum(intArr);

console.log(`Even numbers: ${evenOddCount.even}`);
console.log(`Odd numbers: ${evenOddCount.odd}`);
