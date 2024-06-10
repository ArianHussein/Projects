// Zoek de DOM-elementen op
const player1Score = document.querySelector(".player1-score"); // Zoek het element dat de score van speler 1 weergeeft
const player2Score = document.querySelector(".player2-score"); // Zoek het element dat de score van speler 2 weergeeft
const playerDice = document.querySelector(".player-dice"); // Zoek het element dat de dobbelsteen van de speler weergeeft
const computerDice = document.querySelector(".computer-dice"); // Zoek het element dat de dobbelsteen van de computer weergeeft
const throwButton = document.querySelector(".throw-button"); // Zoek de "Throw" knop
const higherButton = document.querySelector(".higher-button"); // Zoek de "Higher" knop
const lowerButton = document.querySelector(".lower-button"); // Zoek de "Lower" knop
const restartButton = document.querySelector(".restart-button"); // Zoek de "Restart" knop
const currentPlayerIndicator = document.querySelector(".current-player-indicator"); // Zoek het element dat de huidige speler aangeeft

// Variabelen om de scores bij te houden en de huidige speler
let playerScores = [0, 0]; // Een array om de scores van beide spelers bij te houden (Index 0 voor speler 1, Index 1 voor speler 2)
let currentPlayer = 0; // Een variabele om de huidige speler bij te houden (0 voor speler 1, 1 voor speler 2)

// Functie om een willekeurig getal tussen 1 en 6 te genereren voor een dobbelsteenworp
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Genereer een willekeurig getal tussen 1 en 6 en retourneer het
}

// Functie om de scores op het scherm bij te werken
function updateScores() {
    player1Score.textContent = playerScores[0]; // Werk de score van speler 1 op het scherm bij
    player2Score.textContent = playerScores[1]; // Werk de score van speler 2 op het scherm bij
}

// Functie om het spel te resetten naar de beginstand
function resetGame() {
    playerScores = [0, 0]; // Herstel de scores naar de beginstand
    currentPlayer = 0; // Stel de huidige speler in op speler 1
    updateScores(); // Werk de scores op het scherm bij
    throwButton.disabled = false; // Schakel de "Throw" knop in
    higherButton.disabled = true; // Schakel de "Higher" knop uit
    lowerButton.disabled = true; // Schakel de "Lower" knop uit
    restartButton.disabled = true; // Schakel de "Restart" knop uit
    currentPlayerIndicator.textContent = "Player 1's Turn"; // Geef aan dat het de beurt is aan speler 1
    playerDice.textContent = ""; // Wis de weergave van de dobbelsteen van de speler
    computerDice.textContent = ""; // Wis de weergave van de dobbelsteen van de computer
}

// Functie om het spel te beëindigen wanneer een speler 20 punten bereikt
function endGame() {
    if (playerScores[0] >= 20) {
        currentPlayerIndicator.textContent = "Player 1 Wins!"; // Geef aan dat speler 1 heeft gewonnen
    } else if (playerScores[1] >= 20) {
        currentPlayerIndicator.textContent = "Player 2 Wins!"; // Geef aan dat speler 2 heeft gewonnen
    }

    throwButton.disabled = true; // Schakel de "Throw" knop uit
    higherButton.disabled = true; // Schakel de "Higher" knop uit
    lowerButton.disabled = true; // Schakel de "Lower" knop uit
    restartButton.disabled = false; // Schakel de "Restart" knop in
}

// Eventlistener voor de "Throw" knop
throwButton.addEventListener('click', function () {
    const playerDiceResult = rollDice(); // Genereer een dobbelsteenworp voor de speler
    const computerDiceResult = rollDice(); // Genereer een dobbelsteenworp voor de computer

    playerDice.textContent = getDiceSymbol(playerDiceResult); // Toon het dobbelsymbool voor de speler
    computerDice.textContent = getDiceSymbol(computerDiceResult); // Toon het dobbelsymbool voor de computer

    throwButton.disabled = true; // Schakel de "Throw" knop uit
    currentPlayer = 0; // Stel de huidige speler in op speler 1
    higherButton.disabled = false; // Schakel de "Higher" knop in
    lowerButton.disabled = false; // Schakel de "Lower" knop in
    currentPlayerIndicator.textContent = "Player 1's Turn"; // Geef aan dat het de beurt is aan speler 1
});

// Eventlistener voor de "Higher" knop
higherButton.addEventListener('click', function () {
    const playerDiceResult = rollDice(); // Genereer een dobbelsteenworp voor de speler
    const computerDiceResult = rollDice(); // Genereer een dobbelsteenworp voor de computer

    playerDice.textContent = getDiceSymbol(playerDiceResult); // Toon het dobbelsymbool voor de speler
    computerDice.textContent = getDiceSymbol(computerDiceResult); // Toon het dobbelsymbool voor de computer

    if (playerDiceResult > computerDiceResult) {
        playerScores[currentPlayer]++; // Verhoog de score van de huidige speler als de speler wint
    } else {
        currentPlayer = 1 - currentPlayer; // Wissel van speler als de computer wint
        playerScores[currentPlayer]++; // Verhoog de score van de nieuwe huidige speler
    }

    updateScores(); // Werk de scores op het scherm bij

    if (playerScores[0] >= 20 || playerScores[1] >= 20) {
        endGame(); // Controleer of het spel is afgelopen
    } else {
        currentPlayer = 1 - currentPlayer; // Wissel van speler
        currentPlayerIndicator.textContent = `Player ${currentPlayer + 1}'s Turn`; // Geef aan dat het de beurt is van de nieuwe huidige speler
        higherButton.disabled = true; // Schakel de "Higher" knop uit
        lowerButton.disabled = true; // Schakel de "Lower" knop uit
        throwButton.disabled = false; // Schakel de "Throw" knop in
    }  
    higherButton.disabled = true;
    lowerButton.disabled = true;
    throwButton.disabled = false;
});

// Eventlistener voor de "Lower" knop
lowerButton.addEventListener('click', function () {
    const playerDiceResult = rollDice(); // Genereer een dobbelsteenworp voor de speler
    const computerDiceResult = rollDice(); // Genereer een dobbelsteenworp voor de computer

    playerDice.textContent = getDiceSymbol(playerDiceResult); // Toon het dobbelsymbool voor de speler
    computerDice.textContent = getDiceSymbol(computerDiceResult); // Toon het dobbelsymbool voor de computer

    if (playerDiceResult < computerDiceResult) {
        playerScores[currentPlayer]++; // Verhoog de score van de huidige speler als de speler wint
    } else {
        currentPlayer = 1 - currentPlayer; // Wissel van speler als de computer wint
        playerScores[currentPlayer]++; // Verhoog de score van de nieuwe huidige speler
    }


    updateScores(); // Werk de scores op het scherm bij

    if (playerScores[0] >= 20 || playerScores[1] >= 20) {
        endGame(); // Controleer of het spel is afgelopen
    } else {
        currentPlayer = 1 - currentPlayer; // Wissel van speler
        currentPlayerIndicator.textContent = `Player ${currentPlayer + 1}'s Turn`; // Geef aan dat het de beurt is van de nieuwe huidige speler
        higherButton.disabled = true; // Schakel de "Higher" knop uit
        lowerButton.disabled = true; // Schakel de "Lower" knop uit
        throwButton.disabled = false; // Schakel de "Throw" knop in
    }
});

// Eventlistener voor de "Restart" knop
restartButton.addEventListener('click', function () {
    resetGame(); // Start het spel opnieuw door het te resetten naar de beginstand
});

// Start het spel door het te resetten naar de beginstand
resetGame();

// Functie om het dobbelsymbool te krijgen op basis van het resultaat
function getDiceSymbol(result) {
    switch (result) {
        case 1:
            return "⚀";
        case 2:
            return "⚁";
        case 3:
            return "⚂";
        case 4:
            return "⚃";
        case 5:
            return "⚄";
        case 6:
            return "⚅";
        default:
            return "⚀";
    }
}









