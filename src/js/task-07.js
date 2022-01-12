"use strict";

const FontSizeControler = document.querySelector("#font-size-control");
const magic = document.querySelector("#text");

FontSizeControler.addEventListener("input", () => {
  magic.style.fontSize = FontSizeControler.value + "px";
});
