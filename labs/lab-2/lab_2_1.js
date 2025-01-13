// Get input from user about height(m) and weight(kg) then calculate BMI

// Underweight: <18.5
// Normal weight: 18.5 – 24.9
// Overweight: 25–29.9
// Obesity: BMI of 30 or greater


const readline = require('readline-sync');

let clientWeight = Number(readline.question("Your weight:  "));
let clientHeight = Number(readline.question("Your height:  "));

let clientBMI = clientWeight / (clientHeight * clientHeight);

if (clientBMI < 18.5) {
    console.log(`Underweight, your BMI is:  ${clientBMI} you need to gain weight`);
}else if (clientBMI >= 18.5 && clientBMI <= 24.9) {
    console.log(`Normal weight, your BMI is:  ${clientBMI} you should stay this way`);
}else if (clientBMI >= 25 && clientBMI <= 29.9) {
    console.log(`Overweight, your BMI is: ${clientBMI} you need to lose weight` );
}else{
    console.log(`Obesity, your BMI is: ${clientBMI} you need to lose weight immediately`);
}