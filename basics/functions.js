function makeCounter() {
    let count = 0;

    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//«immediately-invoked function expressions» (аббревиатура IIFE)
(function() {

    let message = "Hello";
  
    console.log(message); 
  
  })();


  function sum(a) {
    return
  }

  console.log(sum(a)(b));