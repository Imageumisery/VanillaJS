const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//html elements
const endtime = document.querySelector('.endtime');
const items = document.querySelectorAll('.deadline h4');


//date and time
let diffMilli = 0
let endDate = new Date(2023, 5, 16, 17, 50, 35);


let countdown = setInterval(getRemainingTime, 100);




function getRemainingTime() {
    const dateNow = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;


    diffMilli = endDate.getTime() - dateNow.getTime();

    if (diffMilli < 0) {
        clearInterval(countdown)
        return
    }

    //Calculate all values
    const days = Math.floor(diffMilli / oneDay);
    const hours = Math.floor((diffMilli % oneDay) / oneHour);
    const minutes = Math.floor((diffMilli % oneHour) / oneMinute);
    const seconds = Math.floor((diffMilli % oneMinute) / 1000);
    const millis = Math.floor((diffMilli % 1000) / 10);

    const values = [days, hours, minutes, seconds, millis]

    items.forEach(function (item, index) {
        item.textContent = format(values[index]);
    });

    renderEndDate();
}

function format(item) {
    if (item < 10) {
        return `0${item}`;
    }
    return item;
}

function onDateChange(event) {
    console.log(event);
    endDate = event.target.valueAsDate;
}


function renderEndDate() {
    const year = endDate.getFullYear();
    let month = endDate.getMonth();
    let day = endDate.getDay();
    let hour = endDate.getHours();
    let minute = endDate.getMinutes();
    let second = endDate.getSeconds();
    month = months[month];
    endtime.textContent = `Giveaway ends on ${day} ${month} ${year} ${hour}:${minute}:${second}`;
}

