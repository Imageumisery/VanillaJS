let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
  numbers: 23,
  num1: 44,
  num2: 55,
};

let arr = [4, 5, 6, 7];
let arr1 = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr1, 2, ...arr2, ...arr];
let str = options.title;
let strArray = [...str];

//...str == Array.from(str);

//   function({
//     incomingProperty: varName = defaultValue
//     ...
//   })

// let {prop : varName = default, ...rest} = object;

// let [item1 = default, item2, ...rest] = array

function showMenu({ title = "Untitled", width = 200, height = 100, items = [], ...rest }) {
  console.log(`${title} ${width} ${height}`);
  console.log(items);
  for (const item in rest) {
    console.log(item);
  }
}

console.log(Math.max(...arr));
showMenu(options);
console.log(merged);
console.log(strArray);
let random = Math.round(12 * Math.random());
console.log(merged[random]);