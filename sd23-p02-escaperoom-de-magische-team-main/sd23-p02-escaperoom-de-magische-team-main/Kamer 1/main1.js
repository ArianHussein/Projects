const room1 = document.querySelector(".body-room-1");
const keyOne = document.querySelector(".key");
const openDoor = document.querySelector(".display");
const box = document.querySelector(".key-box");
const invisbaleButtonKamer = document.querySelector(".invisbale-button-kamer");
const massage = document.querySelector(".massage");


invisbaleButtonKamer.addEventListener("click", function (){
    openDoor.classList.remove("display")
    keyOne.remove()
    massage.innerHTML="je hebt de sleutel maak de deur open "
})


