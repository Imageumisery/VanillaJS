/* --- Given an array, get max sub sum of elements inside of array --- */

// let arr = [2, -1, 2, 3, -9];
// let sum = 0;
// getMaxSubSum(arr);
// console.log(sum);

// function getMaxSubSum(array) {
//     let i = 0;
//     let lastSum = 0;
//     while (i < array.length - 1) {
//         sum = array[i];
//         let coupleNumbers = array[i] + array[i + 1];
//         if (coupleNumbers > sum) {
//             sum += coupleNumbers;
//             lastSum = coupleNumbers;
//             if (array[i + 1] > sum) {
//                 sum = array[i + 1];
//             }
//             i++;
//         }
//         else {
//             break;
//         }

//     }
// }

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

let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25, };
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 28, };
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 30, };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
}));

sortByAge(users);
console.log(users);
console.log(usersMapped);

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }

// for (const prop in count) {
//     console.log(prop, count[prop]);
// }


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(sumSalaries());