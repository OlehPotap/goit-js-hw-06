const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsList = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = el;
  ingridientsList.prepend(listItem);
});
