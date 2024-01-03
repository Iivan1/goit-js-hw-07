const elements = document.querySelector("#boxes");
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", createDiv);
btnDestroy.addEventListener("click", removeDiv);

function createDiv() {
  let number = Number(input.value);
  const array = [];

  if (
    number >= input.attributes.min.value &&
    number <= input.attributes.max.value
  ) {
    for (let i = 1; i < number; i += 1) {
      const div = document.createElement("div");
      div.style.width = `${30 + (i - 1) * 10}px`;
      div.style.height = `${30 + (i - 1) * 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.borderRadius = "50%";
      array.push(div);
    }
    elements.append(...array);
  } else {
    alert("Ведіть від 1 до 100");
  }
}
function removeDiv() {
  input.value = "";
  elements.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
