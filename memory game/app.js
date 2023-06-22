const cards__template = [
    {
        name: "face-awesome",
        card: "fa-brands fa-apple"
    },
    {
        name: "house",
        card: "fa-solid fa-house"
    },
    {
        name: "github",
        card: "fa-brands fa-github"
    },
    {
        name: "x-box",
        card: "fa-brands fa-xbox"
    },
    {
        name: "telegram",
        card: "fa-brands fa-telegram"
    },
    {
        name: "playstation",
        card: "fa-brands fa-playstation"
    },
    {
        name: "windows",
        card: "fa-brands fa-windows"
    },
    {
        name: "react",
        card: "fa-brands fa-react"
    },
    {
        name: "whatsapp",
        card: "fa-brands fa-whatsapp"
    },
    {
        name: "google",
        card: "fa-brands fa-google"
    }
].map((card, index) => ({ ...card, id: index }));


const cards = cards__template.concat(cards__template);
let flippedCards = [];
const grid = document.querySelector('.grid');
const randomize_btn = document.createElement('button');
const defaultIconClass = 'icon';



function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        const icon = document.createElement('i');
        card.classList.add('card');
        card.addEventListener('click', flipCard);
        icon.classList.add(defaultIconClass);
        card.appendChild(icon);
        grid.appendChild(card);

    }
    randomize();
}

function randomize() {
    const icons = Array.from(document.querySelectorAll(`.${defaultIconClass}`).values());
    console.log(icons);
    cards.sort(() => 0.5 - Math.random());
    cards.forEach((card, index) => {
        icons[index].parentElement.setAttribute('data-id', card.id);
        icons[index].setAttribute('class', `${defaultIconClass} ${card.card}`);
        icons[index].parentElement.setAttribute('data-index', index);
    })
}

function createButton() {
    document.body.appendChild(randomize_btn);
    randomize_btn.textContent = 'Randomize';
    randomize_btn.addEventListener('click', randomize);
}

function flipCard() {

}

createBoard();

createButton();




/* function flipCard() {
 const flipIndex = 0;
    if (prevFlippedCard === null) {
        prevFlippedCard = this;
    }
     else {
        console.log(prevFlippedCard);
        if (prevFlippedCard === flipIndex) {
            this.dataset.id
        }
    }
    this.classList.add('flipped');
}
    */