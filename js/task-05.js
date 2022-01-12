"use strict";

const inputEl = document.querySelector("#name-input");
const outputEL = document.querySelector("#name-output");

inputEl.addEventListener("input", (action) => {
  outputEL.textContent = action.currentTarget.value;
});
