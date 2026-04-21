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
  const formData = new FormData(document.getElementById("form"));
  clear();
  printText("Hello")
  // validation logic
  const phone = formData.get("phone");
  printText(phone);

  if(!phone.startsWith("+36")) {
      print_error("+36-tal kell kezdődnie")
      return false
  }

  if(phone.length != 12) {
    print_error("Érvénytelen szám")
    return false
  }


  return false;
}
