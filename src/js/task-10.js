function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesFieldEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const buttonEls = document.querySelectorAll("button");

// функция создающая елементы в div#boxes
function createBoxes(amount) {
  for (i = 0; i < amount; i += 1) {
    // boxesFieldEl.append(document.createElement("div"));
  }
}

//Перебор массива объектов buttonEls и...

buttonEls.forEach((el) => {
  // в случае если объект (кнопка) имеент ключ "create" возвращает значени записсанное в инпут в эту часть добавить функцию создающую библиотекку елементов
  if (el.dataset.hasOwnProperty("create")) {
    el.addEventListener("click", () => {
      createBoxes(inputEl.value);
    });
    // в случае если объект (кнопка) не имеент ключ "create" очищает div#boxes
  } else {
    el.addEventListener("click", () => {
      boxesFieldEl.innerHTML = ``;
    });
  }
});

//Тут отслеживается введенное число по событию импут и возвращает значение записанное в инпут кажется эта функция не нужна мне.
// inputEl.addEventListener("input", (number) => {
//   return number.currentTarget.value;
// });

// const elToCreate = `<div></div>`;
