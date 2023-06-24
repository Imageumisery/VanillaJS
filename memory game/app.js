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
let counter = 0;
const grid = document.querySelector('.grid');
const randomize_btn = document.createElement('button');
const defaultIconClass = 'icon';
const footer = document.querySelector('.footer');

createBoard();

createButton();


function createBoard() {
    randomize();
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', i);
        card.addEventListener('click', handleCardClick);
        grid.appendChild(card);
    }
}

function randomize() {
    cards.sort(() => 0.5 - Math.random());
}

function reset() {
    window.location.reload();
}

function createButton() {
    footer.appendChild(randomize_btn);
    randomize_btn.textContent = 'Reset';
    randomize_btn.addEventListener('click', reset);
}

//Card content reveals only on flip
function handleCardClick() {
    if (flippedCards.length < 2) {
        const [firstFlipped] = flippedCards;
        if (firstFlipped?.dataset.index === this.dataset.index) {
            return;
        }
        flipCard.call(this);
    }
    if (flippedCards.length === 2) {
        setTimeout(checkCardMatch, 400);
    }
}

function flipCard() {
    const icon = document.createElement('i');
    icon.setAttribute('class', `${defaultIconClass} ${cards[this.dataset.index].card}`);
    this.appendChild(icon);
    this.classList.add('flipped');
    flippedCards.push(this);
}

function checkCardMatch() {
    const [firstFlipped, secondFlipped] = flippedCards;
    if (cards[firstFlipped?.dataset.index]?.id === cards[secondFlipped?.dataset.index]?.id) {
        flushMatched();
    } else {
        flushUnmatched();
    }
    flippedCards = [];
    checkWin();
}


function flushMatched() {
    flippedCards.forEach((card) => {
        console.log(card);
        card.classList.add('solved');
        card.removeEventListener('click', handleCardClick);
    });
    //count matched to fix the win
    counter++;
}

function flushUnmatched() {
    const icons = document.querySelectorAll(`.${defaultIconClass}`);
    flippedCards.forEach((card) => card.classList.remove("flipped"));
    icons.forEach((icon) => icon.remove());
}

function checkWin() {
    const solvedCardsLength = counter * 2;
    if (solvedCardsLength === cards.length) {
        reset();
        alert('You win the game!');
    }
}