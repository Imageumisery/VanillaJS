const key = 'insane bird';

const a = {
    name: "gotcha",
    id: 1231312312,
    "insane bird": "girl",
};

let fruit;
fruit = 22213;
const b = {
    [fruit]: "2dasd",
};

let schedule = {};

function isEmpty(arr) {
    for (const key in arr) {
        return false;
    }
    return true;
}

function sumUp(arr) {
    let sum = 0;
    for (const key in arr) {
        sum += arr[key];
    }
    return sum;
}


let salaries = {
    John: 100,
    Ana: 500,
    Gut: 900,
    Emma: 200,
}

// console.log(b);
// console.log(key in a);
// console.log(isEmpty(schedule));

console.log(sumUp(salaries));





//cloning objects

let user = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект

for (let key in user) {
    clone[key] = user[key];
}

clone.name = "Albert";

console.log(user);
console.log(clone);




//this method

let someUser = {
    name: "Rick",
    age: 56,
    // typeHi() {
    //     console.log("Hi from someUser!");
    // }
}

//old way to express function within object

// someUser.typeHi = function () {
//     console.log("Hi from someUser!");
// }
// someUser.typeHi();

let user1 = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name); // приведёт к ошибке
    }

};


let admin = user1;
// user1 = null;
// console.log(user1);
// admin.sayHi();







//Using this by common functions

user1.f = tellAge;
someUser.f = tellAge;

user1.f();
someUser.f();

function tellAge() {
    console.log('Person\'s age is:' + this.age);
}

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user2 = makeUser();

console.log(user2.ref.name);






//Symbols
let user3 = {
    name: "Вася"
};

let id = Symbol("id");

user3[id] = 1;

console.log(user3.id);



//Optional-chaining

let userAdmin = {
    admin() {
        console.log("Я админ");
    }
};

let userGuest = {
    name: "Igor",
};

function hasProperty(obj) {
    if (obj.name) {
        console.log(`${obj} has name:` + obj.name);
    }
    else {
        console.log(`${obj} has no name!`);
    }
}
userAdmin.admin?.();

userGuest.admin?.();
//   console.log(userGuest?.[name]);


//Object conversions

let user4 = {
    name: "John",
    money: 1000,

    // [Symbol.toPrimitive](hint) {
    //   console.log(`hint: ${hint}`);
    //   return hint == "string" ? `{name: "${this.name}"}` : this.money;
    // }

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }
};

console.log(user4);
console.log(+user4);
console.log(user4 + 500);