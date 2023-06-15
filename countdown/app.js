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
const items = document.querySelectorAll('.deadline h4')


//date and time

let endDate = new Date(2023, 5, 20, 20, 30, 55);


// let timerId = setTimeout();

function getRemainingTime() {
    const dateNow = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;


    //Calculate all values
    const diffMilli = Math.abs(endDate.getTime() - dateNow.getTime());

    const days = Math.floor(diffMilli / oneDay);
    const hours = Math.floor((diffMilli % oneDay) / oneHour);
    const minutes = Math.floor((diffMilli % oneHour) / oneMinute);
    const seconds = Math.floor((diffMilli % oneMinute) / 1000);
    const millis = Math.floor((diffMilli % 1000) / 10);

    const values = [days, hours, minutes, seconds, millis]

    function format(item) {
        if (item < 10) {
            return `0${item}`;
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.textContent = format(values[index]);
    });



    const year = endDate.getFullYear();
    let month = endDate.getMonth();
    let day = endDate.getDay();
    let hour = endDate.getHours();
    let minute = endDate.getMinutes();
    let second = endDate.getSeconds();
    month = months[month]
    endtime.textContent = `Giveaway ends on ${day} ${month} ${year} ${hour}:${minute}:${second}`;
}

let countdown = setInterval(getRemainingTime, 100);
getRemainingTime();





