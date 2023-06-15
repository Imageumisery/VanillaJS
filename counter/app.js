let countNumber = 0

const counter = document.getElementById("counter")
const increaseElement = document.getElementById("increase")
const resetElement = document.getElementById("reset")
const decreaseElement = document.getElementById("decrease")

console.log(counter);


increaseElement.addEventListener('click', function () {
    increase()
    counter.textContent = countNumber
})

resetElement.addEventListener('click', function () {
    reset()
    counter.textContent = countNumber
})

decreaseElement.addEventListener('click', function () {
    decrease()
    counter.textContent = countNumber
})
function increase() {
    countNumber++
}

function reset() {
    countNumber = 0
}

function decrease() {
    countNumber--
}