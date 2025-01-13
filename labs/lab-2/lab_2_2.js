// Allow user to input a number, print out it’s an odd or even number

const readline = require('readline-sync');

let numberInput = Number(readline.question("Enter the number:  "));

// if(numberInput % 2 == 0){
//     console.log(`${numberInput} is an even number`);
// }else {
//     console.log(`${numberInput} is an odd number`);
// }

let msg = numberInput % 2 ==0 ? `${numberInput} is an even number` : `${numberInput} is an odd number`;
console.log(msg);

