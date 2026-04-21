/*  UTIL FUNCTIONS */

const OUTPUT_ID = "data";

function printText(text) {
  document.getElementById(OUTPUT_ID).innerHTML += `<p>${text}</p>`;
}

function print_error(text) {
  document.getElementById(OUTPUT_ID).innerHTML +=
    `<p style="color: red">${text}</p>`;
}

function clear() {
  document.getElementById(OUTPUT_ID).innerHTML = "";
}

/* EVENT HANDLERS */

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(this);

  // validation logic
}
