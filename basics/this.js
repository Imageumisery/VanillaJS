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