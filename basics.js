
// let someType = true;
// console.log(typeof someType);
// console.log(someType);
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(1));
// console.log(Boolean(0));
// let a = "45";
// let b = "35";

// let value1 = 1;
// let value2 = 2;

// let value3 = 3 - (value1 = value2 + 1);

// let longestValue = "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2;

// let answer = 
// console.log(longestValue);

// console.log(value3);
// console.log(+a + +b);

//obvious interactions with web client


// let promtValue = prompt('How would like to be fucked?')

// alert('You are fucked ' + promtValue + '!!!')

// let confirmValue = confirm('Are you okay?')
// if(confirmValue) {
//     alert('You are doing good')
// } else {
//     alert('Fuck that all, fuck this shit, don\'t give a shit!')
// }

//console.log((6) >> 1);


//Functions 

let a;


if (1) {
    a = function askQuestion(question, yes, no) {
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    };
}
// console.log(a);



function showOk() {
    alert("I agree");
}

function showCancel() {
    alert("I disagree");
}

//a("Do you agree to get fucked really hard?", showOk, showCancel);


// Arrow functions

let value1 = 5;
let value2 = 2;
let sum = (a, b) => a * b;
//alert(sum(value1, value2));


