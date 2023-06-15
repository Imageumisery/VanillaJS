const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"]
const myBlock = document.getElementById("item")
const color = document.querySelector(".color")

myBlock.addEventListener("click", function () {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    myBlock.style.backgroundColor = hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}