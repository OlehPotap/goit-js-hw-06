"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value == "" || password.value === "") {
    return alert("Please fill in all inputs!");
  }

  const contacts = {
    email: email.value,
    password: password.value,
  };
  console.log(contacts);

  event.currentTarget.reset();
});
