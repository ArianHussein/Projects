// DOM
const gameBoardPlayer = document.querySelector(".game-board1");
const gameBoardPc = document.querySelector(".game-board2");
const pcPoits = document.querySelector(".pc-poits");
const playerPoits = document.querySelector(".player-poits");
const btn = document.querySelector(".btn");
const turnDisplay = document.querySelector(".turn-display");
const input = document.querySelector("input");
const nameBtn = document.querySelector(".name-btn");
const namePlayer = document.querySelector(".name-player");
const start = document.querySelector(".start");
const winner = document.querySelector(".winner-text");
let counterPc = 0;
let counterPlayer = 0;

// name input

const onCorrectName = ["homo", "mongool", "je moeder"];
nameBtn.addEventListener("click", () => {
  for (let index = 0; index < onCorrectName.length; index++) {
    const element = onCorrectName[index];
    if (element == input.value) {
      return;
    } else {
      if (input.value != "") {
        console.log(element);
        namePlayer.innerHTML = input.value;
        start.classList.add("display-none");
      }
    }
  }
});

// turn

const checkTurn = (checkingTurns) => {
  if (checkingTurns == "playerTurn") {
    turnDisplay.innerHTML = "Player";
    turn = "playerTurn";
    playerHit();
  }
  if (checkingTurns == "pcTurn") {
    turnDisplay.innerHTML = "PC";
    turn = "pcTurn";
    pcHit();
  } else {
    turnDisplay.innerHTML = "Player";
    turn = "playerTurn";
    playerHit();
  }
};

// buildBoardPc

function buildBoardPc() {
  for (let i = 0; i < 100; i++) {
    gameBoardPc.innerHTML += `<div class="block-pc pc-${i}"></div>`;
  }
}

// click PCBOARD

const playerHit = () => {
  let grids = gameBoardPc.querySelectorAll(".block-pc");
  for (let i = 0; i < grids.length; i++) {
    const grid = grids[i];
    grid.addEventListener("click", function () {
      if (turn == "playerTurn" && !grid.classList.contains("clicked")) {
        grid.classList.add("clicked");
        if (
          grid.classList.contains(`pc-8`) ||
          grid.classList.contains(`pc-19`) ||
          grid.classList.contains(`pc-33`) ||
          grid.classList.contains(`pc-66`) ||
          grid.classList.contains(`pc-93`) ||
          grid.classList.contains(`pc-47`) ||
          grid.classList.contains(`pc-61`)
        ) {
          grid.style.backgroundColor = "red";
          winner.innerHTML = "Je hebt een schip geraakt";
          counterPlayer++;
          playerPoits.innerHTML = counterPlayer;
          if (counterPlayer === 7) {
            winner.innerHTML = "Speler heeft gewonnen";

            setTimeout(() => {
              location.reload();
            }, 4000);
          }
        } else {
          grid.style.backgroundColor = "blue";
          winner.innerHTML = "Niks geraakt";
        }
      }
      checkTurn("pcTurn");
    });
  }
};

buildBoardPc();

// build playerboard

function buildBoardPlayer() {
  for (let i = 0; i < 100; i++) {
    gameBoardPlayer.innerHTML += `<div class="block-player player-${i}"></div>`;
  }
}

buildBoardPlayer();

// click PLAYERBOARD
const pcHit = () => {
  btn.addEventListener("click", function () {
    if (turn == "pcTurn") {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max + 1);
      }
      let myNumber = getRandomInt(100);
      const playerBlock = document.getElementsByClassName(
        `player-${myNumber}`
      )[0];
      if (
        myNumber == 7 ||
        myNumber == 15 ||
        myNumber == 23 ||
        myNumber == 42 ||
        myNumber == 48 ||
        myNumber == 82 ||
        myNumber == 95
      ) {
        playerBlock.style.backgroundColor = "red";
        counterPc++;
        winner.innerHTML = "PC heeft jouw schip geraakt";

        pcPoits.innerHTML = counterPc;
        if (counterPc === 7) {
          winner.innerHTML = "PC heeft gewonnen";
          location.reload();
        }
      } else {
        playerBlock.style.backgroundColor = "blue";
        winner.innerHTML = "Niks geraakt";
      }
      playerBlock.classList.add("clicked");
      checkTurn("playerTurn");
    }
  });
};
checkTurn();
