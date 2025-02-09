const {
    bubbleSort1
} = require('../UtilMethod');


let Array1 = [1, 12, 16, 28, 34];
let Array2 = [1, 13, 16, 27, 99];
const mergedArray = Array1.concat(Array2)
let sortASC = bubbleSort1(mergedArray);
console.log(sortASC);

