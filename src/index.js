function randomNumber() {
  number = Math.ceil(Math.random() * 7);
  return randomNumber;
}

function newNumber() {
  const number = document.querySelector(".number");
  number.textContent = `${randomNumber()}`;
}

const button = document.querySelector(".button");
button.addEventListener("click", newNumber);




