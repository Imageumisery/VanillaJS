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


let flippedCards = [];
const cards = cards__template.concat(cards__template);
const cardShowTimeout = 400;
const cardsRevealedAtTime = 2;
const cardsOnBoard = document.getElementsByClassName('card');
const grid = document.querySelector('.grid');
const randomize_btn = document.createElement('button');
const flipped = 'flipped';
const solved = 'solved';
const defaulClass = 'class';
const defaultIconClass = 'icon';
const defaultCardClass = 'card';
const resetText = 'Reset';
const clickEvent = 'click';
const defaultDivClass = 'div';
const indexAttribute = 'data-index';
const winningText = 'You won the game!';
const footer = document.querySelector('.footer');

createBoard();
createButton();


function createBoard() {
    randomize();
    cards.forEach((_, index) => {
        const card = document.createElement(defaultDivClass);
        card.classList.add(defaultCardClass);
        card.setAttribute(indexAttribute, index);
        card.addEventListener(clickEvent, handleCardClick);
        grid.appendChild(card);
    });
}

function randomize() {
    cards.sort(() => 0.5 - Math.random());
}

function reset() {
    randomize();
    flushAllCards();
}

function flushAllCards() {
    const icons = document.querySelectorAll(`.${defaultIconClass}`);
    icons.forEach((icon) => icon.remove());
    Array.from(cardsOnBoard).forEach((card) => {
        card.classList.remove(flipped, solved);
        card.addEventListener(clickEvent, handleCardClick);
        // card.setAttribute(defaulClass, defaultCardClass);
    });
}

function createButton() {
    footer.appendChild(randomize_btn);
    randomize_btn.textContent = resetText;
    randomize_btn.addEventListener(clickEvent, reset);
}

//Card content reveals only on flip
function handleCardClick() {
    if (flippedCards.length < cardsRevealedAtTime) {
        const [firstFlipped] = flippedCards;
        if (firstFlipped?.dataset.index === this.dataset.index) return;
        flipCard.call(this);
    }
    if (flippedCards.length === cardsRevealedAtTime) {
        setTimeout(checkCardMatch, cardShowTimeout);
    }
}

function flipCard() {
    const icon = document.createElement('i');
    icon.setAttribute(defaulClass, `${defaultIconClass} ${cards[this.dataset.index].card}`);
    this.appendChild(icon);
    this.classList.add(flipped);
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
        card.classList.add(solved);
        card.removeEventListener(clickEvent, handleCardClick);
    });
}

function flushUnmatched() {
    const icons = document.querySelectorAll(`.${defaultIconClass}`);
    flippedCards.forEach((card) => card.classList.remove(flipped));
    icons.forEach((icon) => icon.remove());
}

function checkWin() {
    const solvedCardsLength = document.getElementsByClassName(solved).length;
    if (solvedCardsLength === cards.length) {
        reset();
        alert(winningText);
    }
}