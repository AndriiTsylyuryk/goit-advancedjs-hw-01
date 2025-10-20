const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector(".message");

populateInfo();

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
  const element = event.target.name;
  formData[element] = event.target.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateInfo() {
  const info = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (info) {
    const { email, message } = form.elements;
    email.value = info.email || "";
    message.value = info.message || "";
    formData.email = info.email || "";
    formData.message = info.message || "";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = form.elements;
  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }

  formData.email = email.value;
  formData.message = message.value;

  console.log(formData);

  formData.email = "";
  formData.message = "";

  localStorage.removeItem("feedback-form-state");
  form.reset();
}
