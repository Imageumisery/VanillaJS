let user = {
    sayHi() { // будет пропущено
        alert("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined,
    title: "Conference",
};

let room = {
    number: 23,
    participants: ["john", "ann"]
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: user.room, // meetup ссылается на room
    date: new Date(Date.UTC(2017, 0, 1)),
};


room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, replacer, 2));

function replacer(key, value) {
    // console.log(`${key}: ${value}`);
    return (key != '' && value == 'meetup') ? undefined : value;
}

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// };

// let meetup = {
//     title: "Conference",
//     room,
//     gotcha: false,
// };

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let someJson = JSON.stringify(meetup, undefined, 2);
// let objFromJson = JSON.parse(str, parseDate);

// function parseDate(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// }


// console.log(objFromJson.date.getDate());