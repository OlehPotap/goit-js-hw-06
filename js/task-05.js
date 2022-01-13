"use strict";

const inputEl = document.querySelector("#name-input");
const outputEL = document.querySelector("#name-output");

inputEl.addEventListener("input", (action) => {
  if (inputEl.value === "") {
    outputEL.textContent = "Anonymous";
  } else {
    outputEL.textContent = action.currentTarget.value;
  }
});
