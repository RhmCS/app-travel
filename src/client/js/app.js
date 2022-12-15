import { handelSubmit } from "./handelSubmit";

// Event listener
const generate = document.getElementById("generate");
const form = document.getElementById("my_form");

form.addEventListener("click", () => {
  form.reset();
  generate.addEventListener("click", handelSubmit);
});

export { form, generate };
