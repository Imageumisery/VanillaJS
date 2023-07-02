//Splice
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

//Find
let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];



let [user1, user2, user3] = users;

let user = users.find(item => item.id == 1);

console.log(user);

//map
console.log(users.map((element) => element.id + 2));

//Sort

console.log(users.sort());

//reduce
//   let someArray = [];
// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
// someArray.reduce((sum, current) => sum + current);

let armyFunctions = {
  // minAge: 18,
  // maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let toArmy = [
  { age: 16 },
  { age: 20 },
  { age: 23 },
  { age: 30 },
  { age: 26 },
  { age: 18 },
  { age: 101 },
];

let horribleArmy = {
  minAge: 5,
  maxAge: 100,
}

let goodArmy = {
  minAge: 20,
  maxAge: 25,
}
const horribleArmyCanJoin = armyFunctions.canJoin.bind(horribleArmy);
const goodArmyCanJoin = armyFunctions.canJoin.bind(goodArmy);


// найти пользователей, для которых army.canJoin возвращает true
//   let soldiers = toArmy.filter(army.canJoin, army);
let soldiers = toArmy.filter(goodArmyCanJoin);
console.log(soldiers);
//Вызов users.filter(army.canJoin, army) можно заменить 
//на users.filter(user => army.canJoin(user)), который делает то же самое. 
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;


let ilya = {};
[ilya.name, ilya.surname] = "Ilya Kantor".split(' ');
console.log(ilya);
console.log(user1, user2, user3);
console.log(title);