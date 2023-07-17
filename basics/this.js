function User(name) {
    // this = {};  (неявно)

    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;
    if (!new.target) {
        console.log('sho za bardak!');
        return new User(name);
    }
    // console.log(new.target);

    // return this;  (неявно)
}
// const user = new User("Gale");
console.log(User('beach'));

// console.log(user);


function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// используем 'call' для передачи различных объектов в качестве 'this'
// sayHi.call(user); 
// sayHi.call(admin); 

function hash() {
    console.log( [].join.call(arguments) );
  }
  
//   hash(1, 2, 23, 556, 77, 7, 9);

  let user1 = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user1.sayHi(); // Привет, Вася!
  }, 1000);

