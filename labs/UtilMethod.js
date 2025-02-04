function findMinMax(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < minValue) {
            minValue = arr[index];
        }

        if (arr[index] > maxValue) {
            maxValue = arr[index];
        }


    }
    return { min: minValue, max: maxValue }
}

function countEvenAndOddNum(arr){
    let evenNum = 0;
    let oddNum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 ===0) {
            evenNum++;
        }

        if (arr[index] % 2 !==0) {
            oddNum++;
        }
        
    }
    return{even: evenNum, odd: oddNum};
}


function removeOddNum(arr){
    for (let index = arr.length -1; index >= 0; index--) {
        if (arr[index] % 2 !==0) {
            arr.splice(index, 1);
        }
        
    }
    return {evenArr: arr};
}


function sortNumberASC(num1, num2){
    return num1 - num2;
}


module.exports = {
    findMinMax,
    countEvenAndOddNum,
    removeOddNum,
    sortNumberASC
}