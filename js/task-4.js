const registerForm = document.querySelector(".login-form");
let formData = {};
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  formData.email = email;
  formData.password = password;

  console.log(formData);
  form.reset();
}
