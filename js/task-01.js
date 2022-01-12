"use strict";
const categoriesCount = document.querySelectorAll(".item");
console.log("Number of categories: " + categoriesCount.length);

const categoriesTitles = document.querySelectorAll("li.item");
const categotisTitlesValues = categoriesTitles.forEach((element) => {
  console.log("Category: " + element.firstElementChild.textContent);
  console.log("Elements: " + element.lastElementChild.children.length);
});
