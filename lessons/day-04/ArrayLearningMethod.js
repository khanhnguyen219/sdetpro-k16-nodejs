const{teo} = require('./UtilMethod');
let myArray = [1, 2, 3, 4, 5];

// Filter to get even numbers from array
// Higher Order Function: HOF
let evenNumbers = myArray.filter(teo);

console.log(evenNumbers);
console.log(myArray);
