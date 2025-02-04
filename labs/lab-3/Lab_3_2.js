const {
    findMinMax,
    removeOddNum
} = require('../UtilMethod');


let intArr = [1, 2, 3, 4, 5];
let MinMaxArr = findMinMax(intArr);
let evenArray = removeOddNum(intArr);

console.log(`Maximum: ${MinMaxArr.min}`);
console.log(`Minimum: ${MinMaxArr.max}`);
console.log(`Minimum: ${evenArray.evenArr}`);
