
const invisbaleButton = document.querySelector(".invisbale-button");
const roomBeam = document.querySelector(".room-beam");
const appels = document.querySelectorAll(".appel");
const resultaatElement = document.querySelector(".resultaat");
const kamer = document.querySelector(".kamer");
const deurKnop = document.querySelector(".deur-knop");
const BeginH4 = document.querySelector(".Begin h4");




invisbaleButton.addEventListener("click", function () {
    // Toon de appels in de room-beam, verberg de onzichtbare knop
    roomBeam.style.display = "flex";
    invisbaleButton.style.display = "none";
    BeginH4.style.display = "none";
   
});



appels.forEach(appel => {
    appel.addEventListener("click", function () {
        if (appel.classList.contains("appel-goed")) {
            resultaatElement.textContent = "Gefeliciteerd! Je hebt de goede appel gekozen en gewonnen.";
            
            // Verberg de room-beam en appels van de pagina
            roomBeam.style.display = "none";
            deurKnop.style.display = "block"; // Toon de deur-knop
        } else {
            resultaatElement.textContent = "Helaas! Je hebt de bedorven appel gekozen en verloren.";
        }
        resultaatElement.style.display = "block";
    });
});

// Voeg een click event toe aan de deur-knop
deurKnop.addEventListener("click", function () {
    // Voeg hier de code toe om naar de volgende pagina te navigeren
    // Bijvoorbeeld: window.location.href = "volgende_pagina.html";
});







