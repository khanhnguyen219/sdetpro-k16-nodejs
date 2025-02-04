let myArray = [1, 7, 3, 4];

// DELETE | Slice
// let startIndex = 2;
// let deleteCount = 1;
// let insertValue = 10;
// let returnedValue = myArray.splice(startIndex, deleteCount, insertValue);
// console.log(returnedValue);
// console.log(myArray);

function isOddNumber(number){
    return number % 2 !== 0 ;
}

function removeElementFromArray(arr, startIndex){
    const defaultDeleteCount = 1;
    arr.splice(startIndex, defaultDeleteCount)
}

for (let index = myArray.length -1 ; index >= 0; index--) {
    if(isOddNumber(myArray[index])){
        removeElementFromArray(myArray, index)
    }
    
}
console.log(myArray);
