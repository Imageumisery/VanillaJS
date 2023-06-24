
// let someType = true;
// console.log(typeof someType);
// console.log(someType);
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(1));
// console.log(Boolean(0));
// let a = "45";
// let b = "35";

// let value1 = 1;
// let value2 = 2;

// let value3 = 3 - (value1 = value2 + 1);

// let longestValue = "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2;

// let answer = 
// console.log(longestValue);

// console.log(value3);
// console.log(+a + +b);

let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let rep = str.repeat(12);

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}

console.log(rep);
console.log(str.slice(2));
