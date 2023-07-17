const grid = document.querySelector('.grid');
const result = document.querySelector('.result');
let invaders = [];
let direction = 1;
let width = 15;
let currentShooterIndex = 247;
let invadersId;
let currentLaserIndex;
let invadersMovingTime = 600;
let aliensRemoved = [];
const lose = 'you lose!';

let count = - 1;
for (let i = 3; i < 42; i++) {
    count++;
    if (count === 9) {
        i += 6;
        count = 0;
    }
    invaders.push(i);
}



for (let i = 0; i < 280; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));

draw();

function remove() {
    for (let i = 0; i < invaders.length; i++) {
        squares[invaders[i]].classList.remove('invader');
    }
}

function draw() {
    for (let i = 0; i < invaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            squares[invaders[i]].classList.add('invader');
        }
    }
}

squares[currentShooterIndex].classList.add('shooter');

function handleKeydown(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
            break;
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
            break;
        default:
            break;
    }
    squares[currentShooterIndex].classList.add('shooter');
}

document.addEventListener('keydown', handleKeydown);
document.addEventListener('keydown', shoot);
invadersId = setInterval(moveInvaders, invadersMovingTime);

function moveInvaders() {
    const leftEdge = invaders[0] % width === 0;
    const rightEdge = invaders[invaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge) {
        for (let i = 0; i < invaders.length; i++) {
            invaders[i] += width;
            direction = - 1;
        }
    }

    if (leftEdge) {
        for (let i = 0; i < invaders.length; i++) {
            invaders[i] += width;
            direction = 1;
        }
    }

    for (let i = 0; i < invaders.length; i++) {
        invaders[i] += direction;
    }

    draw();
    checkPlayerCollision();
}

function shoot(e) {
    let laserId;
    if (e.key === ' ') {
        currentLaserIndex = currentShooterIndex;
        laserId = setInterval(bulletFly, 300);
    }
    function bulletFly() {
        squares[currentLaserIndex]?.classList?.remove('bullet');
        currentLaserIndex -= width;
        squares[currentLaserIndex]?.classList?.add('bullet');
        checkBullet(laserId);
    }
}

function checkPlayerCollision() {
    for (let i = 0; i < invaders.length; i++) {
        if (squares[invaders[i]].classList.contains('shooter')) {
            result.textContent = lose;
            result.classList.add('show');
            clearInterval(invadersId);
        }
    }
}

function checkBullet(id) {
    for (let i = 0; i < invaders.length; i++) {
        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('bullet');
            squares[currentLaserIndex].classList.add('boom');
            clearInterval(id);
            const removedAlien = invaders.indexOf(currentLaserIndex);
            aliensRemoved.push(removedAlien);
            setInterval(() => squares[currentLaserIndex].classList.remove('boom'), 300);
        }
    }
}
