function findMinMax(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let index = 1; index < arr.length; index++) {
        const value = arr[index];
        if (value < minValue) {
            minValue = value;
        } else if (value > maxValue) {
            maxValue = value;
        }
        return { message };
    }
    if (minValue === maxValue) {
        const message = `There is no min/max value, all values are same: ${minValue}`;

    }
    return { min: minValue, max: maxValue }
}

function countEvenAndOddNum(arr) {
    let evenNum = 0;
    let oddNum = 0;
    let evenNumberArr = [];
    let oddNumberArr = [];
    for (let index = 0; index < arr.length; index++) {
        const value = arr[index];
        if (isOddNumber(value)) {
            oddNum++;
            oddNumberArr.push(value);
        } else {
            evenNum++;
            evenNumberArr.push(value);

        }
    }
    return { even: evenNum, odd: oddNum, evenArray: evenNumberArr, oddArray: oddNumberArr };
}

function isOddNumber(value) {
    return value % 2 !== 0;
}


function removeOddNum(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        if (arr[index] % 2 !== 0) {
            arr.splice(index, 1);
        }

    }
    return { evenArr: arr };
}

function printArray(arr) {
    if (arr.length === 0) {
        return '';
    } else {
        return `---> ${arr}`
    }
}


// function bubbleSort(arr) {
//     let unsortedPosition = arr.length - 1;
//     for (let i = 0; i < unsortedPosition; i++) {
//         for (let index = 0; index < unsortedPosition - i; index++) {
//             const leftValue = arr[index];
//             const rightValue = arr[index+1];
//             if (leftValue > rightValue) {
//                 swapASC(arr, index);
//             }
//         }
        
//     }
//     return arr;
// }


function bubbleSort1(arr) {
    let unsortedPosition = arr.length - 1;
    for (; unsortedPosition > 0; unsortedPosition--) {
        for (let index = 0; index < unsortedPosition; index++) {
            const leftValue = arr[index];
            const rightValue = arr[index + 1];
            if (leftValue > rightValue) {
                swapASC(arr, index);
            }

        }

    }
    return arr;
}


function bubbleSort2(arr) {
    let unsortedPosition = arr.length - 1;
    while (unsortedPosition > 0) {
        for (let index = 0; index < unsortedPosition; index++) {
            const leftValue = arr[index];
            const rightValue = arr[index + 1];
            if (leftValue > rightValue) {
                swapASC(arr, index);
            }

        }
        unsortedPosition--;
    }
    return arr;
    
}

function swapASC(arr, index) {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
}

module.exports = {
    findMinMax,
    countEvenAndOddNum,
    removeOddNum,
    printArray,
    bubbleSort1
}
