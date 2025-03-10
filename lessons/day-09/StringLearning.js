
let myString = ` Day là chu trong \`nhay don\``;
console.log(myString);

// Lenght
console.log(myString.length);

// charArt
console.log(myString.charAt(0));

// Print each character
for (let index = 0; index < myString.length; index++) {
    // console.log(myString.charAt(index));
    
}

// eliminate spaces
let trimStr = myString.trim();
console.log(myString.trim());

// hint: Em phai hi sinh
let targetStr = "tMomi mnay gmap mnmhamu 7MH";
// REGEX
let decodeStr = targetStr.replace(/m/gi, "");
console.log(decodeStr);

// split
let uiStr = "200mins";
let uiStrWithNum = uiStr.replace(/[^0-9]/g, "");
console.log(Number(uiStrWithNum) + 1);

// +, concat() - concatenating
let firstString = "Hello";
let secondString = ", tui ten teo";
let combinedStr = firstString.concat(secondString).concat("!" + "!");
console.log(combinedStr);

// Sub string
let strToBeCut = "https://sdetpro.com";

// Inclusive
let startIndex = 0;

// Exclusive
let endIndex = 5;

let subString = strToBeCut.substring(startIndex, endIndex);
console.log(subString);

// split
console.log(strToBeCut.split("://"));
