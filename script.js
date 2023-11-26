// Récupération des deux boutons
const btn1 = document.querySelector(".btn__1");
const btn2 = document.querySelector(".btn__2");

// Ecoute de l'événement mouseenter sur le bouton 1
btn1.addEventListener("mouseenter", () => {
  btn2.classList.add("blurred");
});

// Ecoute de l'événement mouseleave sur le bouton 1
btn1.addEventListener("mouseleave", () => {
  btn2.classList.remove("blurred");
});

// Ecoute de l'événement mouseenter sur le bouton 2
btn2.addEventListener("mouseenter", () => {
  btn1.classList.add("blurred");
});

// Ecoute de l'événement mouseleave sur le bouton 2
btn2.addEventListener("mouseleave", () => {
  btn1.classList.remove("blurred");
});

// Récupération de la div ayant la classe text
const txt = document.querySelector(".txt");

// Ecoute de l'événement mouseenter sur la div
txt.addEventListener("mouseenter", () => {
  txt.classList.add("animation");
});

// Ecoute de l'événement mouseleave sur la div
txt.addEventListener("mouseleave", () => {
  txt.classList.remove("animation");
});
