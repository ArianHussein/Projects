// Console.log om aan te geven dat het hoofdscript is geladen
console.log('main loaded');

// Definieer minimum en maximum tijd voor de actieve tegel
const minimumTime = 500;
const maximumTime = 1250;

// Initialisatie van variabelen voor spelerpunten, spelstatus, timer-ID en spel-einde vlag
let playerPoints = 0;
let gameStarted = false;
let timerId;
let gameEnd = false;

// Alle opgehaalde classes vanuit HTML met queryselectors
const playerPointsElement = document.querySelector('.player-points');
const endGameButton = document.querySelector('.end-game-button');
const startGameButton = document.querySelector('.start-game-button');
const messageBox = document.querySelector('.message-box'); 

// Toevoeging van elementen voor naam bewerken
const editNameButton = document.querySelector('.edit-name-button');
const playerNameElement = document.querySelector('.player-name');

// Event listener voor naam bewerken knop
editNameButton.addEventListener('click', function () {
    // Prompt voor het invoeren van de naam
    const playerName = prompt('Enter your name:');
    if (isValidName(playerName)) {
        // Valideer en update de naam van de speler
        const sanitizedName = playerName.replace(/[^a-zA-Z0-9 ]/g, ''); // Verwijder niet-alfanumerieke tekens
        playerNameElement.textContent = sanitizedName;
        showMessage(`Name updated: ${sanitizedName}`);
    } else {
        showMessage('Invalid name. Please choose a different name.');
    }
});

// Functie om de naam te valideren
function isValidName(name) {
    // Controleer op ongepaste woorden
    const inappropriateWords = ['fuck', 'nigger', 'ur gay', 'jemoeder', 'kanker'];
    for (const word of inappropriateWords) {
        if (name.toLowerCase().includes(word)) {
            return false;
        }
    }

    // Controleer op speciale tekens
    const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (specialCharacters.test(name)) {
        return false;
    }

    return true;
}

// Selecteer alle tegels in het spel
const allTiles = document.querySelectorAll('.tile');

// Functie om een willekeurig getal tussen min en max te genereren
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Event listener voor het starten van het spel
startGameButton.addEventListener('click', function () {
    // Schakel knoppen in/uit en start het spel als het nog niet is gestart
    startGameButton.disabled = true;
    endGameButton.disabled = false;
    if (!gameStarted) {
        startGame();
    }
    gameStarted = true;
    gameEnd = false; // Reset het gameEnd
    playerPoints = 0;
    playerPointsElement.textContent = playerPoints;
    showMessage('Het spel is begonnen! Veel succes!');
});

// Event listener voor het beëindigen van het spel
endGameButton.addEventListener('click', function () {
    // Schakel knoppen in/uit en beëindig het spel als het is gestart
    endGameButton.disabled = true;
    startGameButton.disabled = false;
    if (gameStarted) {
        endGame();
    }
    gameEnd = true;
});

// Functie om te reageren op een tegelklik
function tileClicked(tile) {
    if (tile.classList.contains('active')) {
        // Verhoog of verlaag punten afhankelijk van de tile die geklikt is
        playerPoints = playerPoints + 1;
        showMessage('Goed gedaan! +1 punten');
        if (playerPoints >= 15) {
            resetGame();
        }
    } else {
        playerPoints = playerPoints - 1;
        showMessage('Mis! -1 punten');
        if (playerPoints <= 0) {
            endGame();
        }
    }
    console.log(playerPoints);
    tile.classList.remove('active');
    playerPointsElement.textContent = playerPoints;
}

// Functie om het spel te resetten na het winnen
function resetGame() {
    showMessage('Gefeliciteerd! Je hebt het spel gewonnen!');
    playerPoints = 0;
    playerPointsElement.textContent = playerPoints;
    endGame();
}

// Functie om een bericht weer te geven en na 2 seconden te verbergen
function showMessage(message) {
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    setTimeout(function () {
        messageBox.style.display = 'none';
    }, 2000); // Verberg het bericht na 2 seconden
}

// Functie om een willekeurige tegel actief te maken
function activateRandomTile() {
    const currentActiveTile = document.querySelector('.tile.active');
    if (currentActiveTile) {
        currentActiveTile.classList.remove('active');
    }
    let randomTileNumber = getRandomNumber(0, allTiles.length - 1);
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add('active');
    startGame();
};

// Event listeners voor elke tegel om te reageren op klikken
allTiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
        if (gameStarted) {
            tileClicked(tile);
        }
    })
});

// Functie om het spel te starten door een timer in te stellen voor het activeren van een willekeurige tegel
function startGame() {
    const randomTime = getRandomNumber(minimumTime, maximumTime);
    timerId = setTimeout(activateRandomTile, randomTime);
}

// Functie om het spel te beëindigen
function endGame() {
    gameStarted = false;
    startGameButton.disabled = false;
    clearInterval(timerId);
    clearTiles();
}

// Functie om alle tegels te deactiveren
function clearTiles() {
    for (let i = 0; i < allTiles.length; i++) {
        const tileElement = allTiles[i];
        tileElement.classList.remove('active');
    }
}













