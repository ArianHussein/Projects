const startTheGame = document.querySelector(".start-the-game")
const startBericht = document.querySelector(".start-bericht")
const okKnop = document.querySelector(".ok")
const inHome = document.querySelector(".in-home")

startTheGame.addEventListener("click",function () {
    startBericht.classList.remove("hide")
    okKnop.classList.remove("hide")
})
okKnop.addEventListener("click",function () {
    inHome.classList.remove("hide")
    startBericht.remove()
    okKnop.remove()
    startTheGame.remove()
})