console.log("hoi");
const invisbaleButton1 = document.querySelector(".invisbale-button1");
const howToPlay = document.querySelector(".how-to-play");
const btnRoom1 = document.querySelector(".btn-room-1");
const btnRoom2 = document.querySelector(".btn-room-2");
const container = document.querySelector(".container");
const openRoom = document.querySelector(".open-room");
const mirrorText = document.querySelector(".mirror-text");

invisbaleButton1.addEventListener("click", function () {
  container.classList.remove("hide");
  howToPlay.innerHTML="Zeg iets aardig"
});
btnRoom1.addEventListener("click", function (params) {
  mirrorText.innerHTML =
    "Bedankt je bent een vriendelijk persoon je maag door!";
  openRoom.classList.remove("open-room");
  container.remove();
  btnRoom2.disabled = true;
  invisbaleButton1.disabled = true;
  howToPlay.innerHTML="Klik op de duer om naar de volgende kamer te gaan"
});
btnRoom2.addEventListener("click", function (params) {
  mirrorText.innerHTML = "Zeg iets aardig dan mag je door";
});
