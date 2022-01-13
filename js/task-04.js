"use strict";
let counterValue = 0;

const counterValueDecrement = document.querySelector(
  '[data-action="decrement"]'
);
const counterValueIncrement = document.querySelector(
  '[data-action="increment"]'
);

const counterValueEl = document.querySelector("#value");

counterValueDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
counterValueIncrement.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
