let array = [1, 2, 3, 4, 5];

// Map
// let returnedValues = array.map(myRule);
// console.log(returnedValues);
// function myRule(value, index, array){
//     return value * 2;
// }


// forEach
let userList = [];
array.forEach(addAutomationUsername);
function addAutomationUsername(value, index, array){
    userList.push(`AutomationUser_${value}`)
}
console.log(userList);

// Sort - String
let strings = ['B', 'C', 'D', 'A'];
// strings.sort();
// console.log(strings);
// strings.reverse();
// console.log(strings);

// Sort - Number | Not approriate
let anotherArray = [100, 19, 22];
anotherArray.sort(sortNumberDESC);
console.log(anotherArray);

function sortNumberASC(num1, num2){
    return num1 - num2;
}

function sortNumberDESC(num1, num2){
    return num2 - num1;
}