// CSS keyframe animaties op HTML objecten "plakken" via de muis!
// Hier maken we de variabelen aan: we "zeggen" tegen Javascript WAAR in de HTML pagina de paarse en oranje cirkel te vinden zijn waar we interactie op gaan plaatsen!
let paarseCirkel = document.querySelector("#paarseCirkel");
let oranjeCirkel = document.querySelector("#oranjeCirkel");

// En nu interactie!

// EventListeners!
// Als je OP de paarse cirkel je muis ingedrukt houdt (mousedown), dan beweegt de oranje stip vooruit en als je je vinger omhoog doet (mouseup) dan gaat de cirkel achteruit terug! 😃 Kun je ook het verschil in de browser zien tussen mouseover, mouseout en mouseleave?
//
paarseCirkel.addEventListener("mousedown", function (e) {
	oranjeCirkel.classList.add("animatie-vooruit");
	oranjeCirkel.classList.remove("animatie-achteruit");
});

paarseCirkel.addEventListener("mouseup", function (e) {
	oranjeCirkel.classList.remove("animatie-vooruit");
	oranjeCirkel.classList.add("animatie-achteruit");
});

paarseCirkel.addEventListener("mouseleave", function (e) {
	oranjeCirkel.textContent = "Hallo";
});
