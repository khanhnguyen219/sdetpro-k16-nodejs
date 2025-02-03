const {
    findMinMax
} = require('../UtilMethod');


let intArr = [1, 2, 3, 4, 5];
let MinMaxArr = findMinMax(intArr);

console.log(`Maximum: ${MinMaxArr.min}`);
console.log(`Minimum: ${MinMaxArr.max}`);
