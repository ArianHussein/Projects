document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.querySelector(".start-game-button");
    const tiles = document.querySelectorAll(".tile");

    startButton.addEventListener("click", startGame);

    function startGame() {
        tiles.forEach(tile => {
            tile.innerHTML = "";
            tile.addEventListener("click", tileclick);
        });
    }

    function tileclick() {
        this.innerHTML = "O";
    }
    
    function tileclick() {
        this.innerHTML = "X";
    }
});