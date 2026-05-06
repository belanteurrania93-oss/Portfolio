// script.js
let score = 0;
let timeRemaining = 30;
let timerInterval;
const gameArea = document.getElementById('game-area');
const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-button');

// Start the game
startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeRemaining = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timeDisplay.textContent = `Time Remaining: ${timeRemaining}`;
    startButton.disabled = true;

    square.style.display = 'block';
    moveSquare();

    timerInterval = setInterval(() => {
        timeRemaining--;
        timeDisplay.textContent = `Time Remaining: ${timeRemaining}`;
        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

// Move the square to a random position
function moveSquare() {
    const maxX = gameArea.offsetWidth - square.offsetWidth;
    const maxY = gameArea.offsetHeight - square.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    square.style.left = `${randomX}px`;
    square.style.top = `${randomY}px`;
}

// Handle clicking on the square
square.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveSquare();
});

// End the game
function endGame() {
    clearInterval(timerInterval);
    square.style.display = 'none';
    alert(`Game Over! Your final score is ${score}.`);
    startButton.disabled = false;
}
