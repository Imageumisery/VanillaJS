let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

let obj = {
    name: "John",
    age: 30
};



let mapFromObj = new Map(Object.entries(obj));


//setting values after 
// map.set("1", "str1")
//     .set(1, "num1")
//     .set(true, "bool1");

// console.log(mapFromObj);


//  Перебор
// for (const item of map.entries()) {
//     // console.log(item);
// }

// map.forEach((value, key) => console.log(key, value));



// -------  SET  -------

let massive = [2, 23, 6, 8, 9];
console.log(massive[Symbol.iterator]());
let set = new Set(massive);

console.log(set[Symbol.iterator]());

let setGuests = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
setGuests.add(john);
setGuests.add(pete);
setGuests.add(mary);
setGuests.add(john);
setGuests.add(mary);

// setGuests хранит только 3 уникальных значения
console.log(setGuests.size); // 3

for (let user of setGuests) {
    console.log(user.name); // John (потом Pete и Mary)
}

//return unique



let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


let anagrams = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

// console.log(unique(values));
console.log(aClean(anagrams));


function unique(arr) {
    return Array.from(new Set(arr));
}


function aClean(arr) {
    let map = new Map();
    for (const word of arr) {
        let sorted = word.toLowerCase().split('').sort().join();
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
