const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

function changeText(event) {
  if (input.value.trim() === "") {
    return (span.textContent = "Anonymous");
  }
  span.textContent = event.currentTarget.value;
}

input.addEventListener("input", changeText);
