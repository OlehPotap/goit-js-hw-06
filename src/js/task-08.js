"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value == "" || password.value === "") {
    return console.log("alert! Please fill in all inputs!");
  }

  email = email.value;
  password = password.value;
  console.log({ email, password });

  event.currentTarget.reset();
});
