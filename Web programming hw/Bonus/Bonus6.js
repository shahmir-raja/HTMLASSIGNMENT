const colors = generateRandomColors(6);
let pickedColor = pickColor();
let score = 0;
let gameOver = false;

const colorDisplay = document.getElementById('colorDisplay');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const scoreValue = document.getElementById('scoreValue');
const colorContainer = document.getElementById('colorContainer');

resetButton.addEventListener('click', resetGame);

function resetGame() {
    colors.forEach((color, index) => {
        if (index < 3) {
            colorContainer.innerHTML += `<div class="colorOption" style="background-color: ${color};"></div>`;
        }
    });
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = '';
    resetButton.textContent = 'New Colors';
    gameOver = false;
}

colorContainer.addEventListener('click', function(event) {
    if (!gameOver) {
        const clickedColor = event.target.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = 'Correct!';
            score++;
            scoreValue.textContent = score;
            resetButton.textContent = 'Play Again?';
            gameOver = true;
        } else {
            event.target.style.backgroundColor = '#f9f9f9';
            message.textContent = 'Try Again';
        }
    }
});

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        const color = randomColor();
        arr.push(color);
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

resetGame();
