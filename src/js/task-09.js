"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const bgClrInformerEl = document.querySelector(".color");
const bgClrChangeBtnEl = document.querySelector(".change-color");

bgClrChangeBtnEl.addEventListener("click", (event) => {
  bodyEl.style.background = getRandomHexColor();

  // Вывод занчения цвета в RGB
  // bgClrInformerEl.textContent = bodyEl.style.background;

  // Вывод значения цвета в HEX
  bgClrInformerEl.textContent = getRandomHexColor();
});
