/* --- Given an array, get max sub sum of elements inside of array --- */

let arr = [2, -1, 2, 3, -9];
let sum = 0;
getMaxSubSum(arr);
console.log(sum);

function getMaxSubSum(array) {
    let i = 0;
    let lastSum = 0;
    while (i < array.length - 1) {
        sum = array[i];
        let coupleNumbers = array[i] + array[i + 1];
        if (coupleNumbers > sum) {
            sum += coupleNumbers;
            lastSum = coupleNumbers;
            if (array[i + 1] > sum) {
                sum = array[i + 1];
            }
            i++;
        }
        else {
            break;
        }

    }
}

// if (array[i] > sum) {
//     sum = array[i];
// }
// if (array[i + 1] > sum) {
//     sum = array[i + 1];
// }



/*for (let j = array.length - 1; j >= len; j--) {
let coupleNumbers2 = array[j - 1] + array[j];
let coupleNumbers = array[i] + array[i + 1];
if (coupleNumbers2 < coupleNumbers) {
    sum = (sum += coupleNumbers) > sum ? (sum += coupleNumbers): sum;
    i++;
}
else {
    sum = (sum += coupleNumbers2) > sum ? (sum += coupleNumbers2): sum;
    j--;
}
}

   // let len = Math.round((array.length - 1) / 2);
    // let arr1 = [];
    // let arr2 = [];

    // let j = array.length - 1;
   
*/


/* ---  --- */