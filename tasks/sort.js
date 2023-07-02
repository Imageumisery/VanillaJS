let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => (a >= b ? -1 : 1));
console.log(arr);

let strings = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(strings);
console.log(sorted);

function copySorted(str) {
    return str.slice().sort();
}