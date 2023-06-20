/* --- Given an array, get max sub sum of elements inside of array --- */

let arr = [2, -1, 2, 3, -9];
let sum = 0;
console.log(arr.length);
// getSum(arr);
getMaxSubSum(arr);
console.log(sum);

function getMaxSubSum(array) {
    let len = Math.round((array.length - 1) / 2); 
    // let arr1 = [];
    // let arr2 = [];
    
    let j = array.length - 1;
    let i = 0;
    while (j >= len || i < len) {
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
       

}

// for (let j = array.length - 1; j >= len; j--) {
   
// }


/* ---  --- */