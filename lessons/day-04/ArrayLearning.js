// CRUD
// CREAT
let myArray = [1, 2, 3, 4, 5];
// first element's index: 0 
// last element's index: array's lenght - 1 

// Get the array's lenght
console.log(`Array's lenght: ${myArray.length}`);

// READ
// for (let index = 0; index < myArray.length; index++) {
//     // console.log(myArray[index]);
// }

// for (let index = myArray.length - 1; index >= 0; index--) {
//     // console.log(myArray[index]);

// }

// Undefined holes
// myArray[10] = 10000;
// console.log(myArray[9]);
// let removeValue = myArray.pop();
// console.log(`removeValue: ${removeValue}`);
// console.log(myArray);


for (let index = 0; index < myArray.length;) {
    if (myArray[index] % 2 !== 0) {
        myArray[index] = myArray[index] * 2;
    }
    index++;
}
console.log(myArray);

myArray.pop();
