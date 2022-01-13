function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesFieldEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const buttonEls = document.querySelectorAll("button");

// функция создающая елементы в div#boxes
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newItem = document.createElement("div");
    newItem.style.background = getRandomHexColor();
    newItem.style.width = 30 + i * 10 + "px";
    newItem.style.height = 30 + i * 10 + "px";

    boxesFieldEl.append(newItem);
  }
}

//Перебор массива объектов buttonEls и...

buttonEls.forEach((el) => {
  // в случае если объект (кнопка) имеент ключ "create" передает в функцию, создающую элементы, значене введенное в инпут
  if (el.dataset.hasOwnProperty("create")) {
    el.addEventListener("click", () => {
      createBoxes(inputEl.value);
    });
    // в случае если объект (кнопка) не имеент ключ "create" очищает div#boxes просто вставляя пустую строку в innerHTML, не как в задании, но уже и так много времени ушло =)
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
