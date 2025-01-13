// Naming convention
// Reserved keywords
// camelCase, snake_case, PascalCase, kebab-case

let myNum1 = 1;
let myNum2 = 2;

// 1. Right operand and left operand
let result = myNum1 + myNum2;
console.log('Total result:' + result);
console.log('Total result:' , result);

// String template/literal (`: )
// [`]: backtick
console.log(`Total result: ${result + 1}`);

// Forward slash
result = 5%2;
console.log(`5%2: ${result}`);
console.log(`4/2: ${4/2}`);
console.log(`5/2: ${10/3}`);

// Rounding
let roundingNearest = Math.round(9/2);
console.log(`roundingNearest: 9/2 = ${roundingNearest}`);

let roundingFloor = Math.floor(9/2);
console.log(`roundingFloor: 9/2 = ${roundingFloor}`);

let roundingCiel = Math.ceil(9/2);
console.log(`roundingCiel: 9/2 = ${roundingCiel}`);

result = 10/3;
let toFixedNumber = result.toFixed(3);
console.log(`toFixedNumber: 10/3 = ${toFixedNumber}`);


let multiply = 3 * 2; // 3 times 2
console.log(`3 * 2 = ${multiply}`);

