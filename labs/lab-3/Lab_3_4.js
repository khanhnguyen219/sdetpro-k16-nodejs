const {
    bubbleSort1,
    ArrayASCSorting
} = require('../UtilMethod');


let Array1 = [1, 12, 16, 28, 34];
let Array2 = [1, 13, 16, 27, 99];
// const mergedArray = Array1.concat(Array2)
// let sortASC = bubbleSort1(mergedArray);
let arrayASC = ArrayASCSorting(Array1,Array2);
console.log(arrayASC.mergedArray);

