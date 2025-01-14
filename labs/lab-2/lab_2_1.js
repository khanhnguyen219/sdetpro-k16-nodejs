// Get input from user about height(m) and weight(kg) then calculate BMI

// Underweight: <18.5
// Normal weight: 18.5 – 24.9
// Overweight: 25–29.9
// Obesity: BMI of 30 or greater


const readline = require('readline-sync');

let clientWeight = Number(readline.question("Your weight:  "));
let clientHeight = Number(readline.question("Your height:  "));

let clientBMI = clientWeight / (clientHeight * clientHeight);

let isUnderweight = false;
let isOverweight = false;
let isoNormalWeight = false;
let isObesity = false;

if (clientBMI < 18.5) {
    isUnderweight = true;
}else if (clientBMI >= 18.5 && clientBMI <= 24.9) {
    isoNormalWeight = true;
}else if (clientBMI >= 25 && clientBMI <= 29.9) {
    isOverweight = true;
}else{
    isObesity = true;
}


if(isUnderweight){
    let ideaW = 18.5 * (clientHeight * clientHeight);
    let needToGain = ideaW - clientWeight;
    console.log(`Underweight, your BMI is:  ${clientBMI} you need to gain weight ${needToGain} kg`);
}

if(isoNormalWeight){
    console.log(`Normal weight, your BMI is:  ${clientBMI} your weight is ideal`);
}

if(isOverweight){
    let ideaW = 29.9 * (clientHeight * clientHeight);
    let needToLoose = clientWeight - ideaW;
    console.log(`Overweight, your BMI is: ${clientBMI} you need to lose weight ${needToLoose} kg` );
}

if(isObesity){
    let ideaW = 29.9 * (clientHeight * clientHeight);
    let needToLoose = clientWeight - ideaW;
    console.log(`Obesity, your BMI is: ${clientBMI} you need to lose weight ${needToLoose} kg`);
}