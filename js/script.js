"use strict";

const sections = document.querySelectorAll("section");

// Window tager fat om browservinduet og onscroll er en event der sker når der scrolles
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // får nuværende scroll position
    let scrollDistance = window.scrollY;
    // får sektionens position ift. toppen af dokumentet
    let sectionDistance = section.offsetTop;
    // hvis sektionen er kommet ind i synsfeltet, tilføjes der "show-animate", ellers fjernes
    // vi trækker lidt fra for at trigge før toppen rammer helt
    if (scrollDistance >= sectionDistance - 50) {
      section.classList.add("show-animate");
    } else {
      section.classList.remove("show-animate");
    }
  });
});

// Hover-effekt på første sektion (sikrer korrekt selector og null-check)
const sectionOne = document.querySelector(".sec1");
if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}

const horse = document.getElementById("horsepic");
const polarBear = document.getElementById("polarbearpic");
const dog = document.getElementById("dogpic");

const soundHorse = new Audio("sound/horse.wav");
horse.addEventListener("click", () => {
  soundHorse.play();
  horse.classList.toggle("animate");
  horse.classList.toggle("anim-scale");
});

const soundPolarBear = new Audio("sound/Bear.wav");
polarBear.addEventListener("click", () => {
  soundPolarBear.play();
  polarBear.classList.toggle("animate");
  polarBear.classList.toggle("anim-scale");
});

const soundDog = new Audio("sound/dog.wav");
dog.addEventListener("click", () => {
  soundDog.play();
  dog.classList.toggle("animate");
  dog.classList.toggle("anim-scale");
});

const tiger = document.getElementById("tigerpic");
if (tiger) {
  tiger.addEventListener("click", function () {
    this.classList.toggle("anim-bounce");
  });
}
