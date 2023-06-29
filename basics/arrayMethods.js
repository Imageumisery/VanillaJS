let arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
console.log(arr);

//concat with objects

let arr1 = [1, 2];

//…Но если массивоподобный объект имеет 
//специальное свойство Symbol.isConcatSpreadable, 
//то он обрабатывается как массив, с помощью concat: 
//вместо него добавляются его элементы:
let arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr1.concat(arrayLike));