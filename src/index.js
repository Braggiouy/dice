function randomNumber() {
  let number = Math.ceil(Math.random() * 6);
  let dice = document.querySelector(".dice");
  dice.textContent = `${number}`;
}

let button = document.querySelector(".button");
button.addEventListener("click", randomNumber);







