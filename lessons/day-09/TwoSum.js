/**
 * 
 * Two sum
 * [3,7,22,1], target number:8
 * --> return [1,3]
 */

// Brute force
/**
 outer loop index 0 -> 
    firstNum
    inner loop index + 1 -> lenght - 1
        if(firtstNum + current === target)
            return [firstIndex, secondIndex]
return[]
 */
// Time Completexity: On^2
const givenArray = [3, 7, 22, 1];
const targetNum = 8;
let indices_1 = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices_1);
let indices_2 = findIndicesUsingMap(givenArray, targetNum);
console.log(indices_2);

function findIndicesUsingBruteForce(array, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < array.length - 1; firstNumIndex++) {
        const firstNum = array[firstNumIndex];
        for (let secondNumberIndex = firstNumIndex + 1; secondNumberIndex < array.length; secondNumberIndex++) {
            const secondNum = array[secondNumberIndex];
            if (targetNum === firstNum + secondNum) {
                return [firstNumIndex, secondNumberIndex];
            }
        }
    }
    return [];
}

// O(n)

// [3,7,22,1], target number:8
function findIndicesUsingMap(array, targetNum) {
    let numMap = new Map();
    for (let currentNumberIndex = 0; currentNumberIndex < array.length; currentNumberIndex++) {
        const currentNum = array[currentNumberIndex];
        const lookingNum = targetNum - currentNum;
        if (numMap.has(lookingNum)) {
            return[numMap.get(lookingNum), currentNumberIndex];
        }
        numMap.set(currentNumberIndex, currentNum);
        /**
         * [
         * [3(value),0(index)],
         * [7(value),1(index)],
         * [22(value),2(index)],
         * ]
         * 
         */
    }
    return [];
}