
//obvious interactions with web client


let promtValue = prompt('How would like to be known?')

alert('You are screwed ' + promtValue + '!!!')

let confirmValue = confirm('Are you okay?')
if(confirmValue) {
    alert('You are doing good')
} else {
    alert('shit!')
}



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
console.log(a);



function showOk() {
    alert("I agree");
}

function showCancel() {
    alert("I disagree");
}

a("Do you agree to get toil really hard?", showOk, showCancel);


// Arrow functions

let value1 = 5;
let value2 = 2;
let sum = (a, b) => a * b;
alert(sum(value1, value2));
