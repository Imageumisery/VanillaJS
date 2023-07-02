let arr = [5, 1, 3, 4];
let result = filterRange(arr, 0, 3);
console.log(result);
filterRangeInPlace(arr, 1, 4);
console.log(arr);

function filterRange(arr, a, b) {
    return arr.filter(number => (number >= a && number <= b));
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
}