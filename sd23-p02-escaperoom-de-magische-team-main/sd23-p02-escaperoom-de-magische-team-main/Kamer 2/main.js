const symbols = document.querySelectorAll('.symbol');
const message = document.querySelector('.message');
const button = document.querySelector('.invisbale-button2');
const correctOrder = ['red', 'green', 'blue'];
let playerOrder = [];

button.disabled = true;

symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        const clickedColor = symbol.classList[1];
        playerOrder.push(clickedColor);
        symbol.style.opacity = '1'; // To give visual feedback on click
        checkOrder(playerOrder.length - 1);
    });
});

function checkOrder(index) {
    if (playerOrder[index] !== correctOrder[index]) {
        showMessage('Foute volgorde. Probeer opnieuw.');
        resetPuzzle();
        return;
    }

    if (index === correctOrder.length - 1) {
        showMessage('Gefeliciteerd! Je hebt de symbolenpuzzel opgelost. Je mag door de deur gaan!');
        button.disabled = false;
    }
}

function resetPuzzle() {
    playerOrder = [];
    setTimeout(() => {
        symbols.forEach(symbol => {
            symbol.style.opacity = '0.5';
        });
    }, 1000); // Delay for 1 second before resetting opacity
}

function showMessage(text) {
    message.innerText = text;
}


