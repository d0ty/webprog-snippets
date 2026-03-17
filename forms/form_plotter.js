document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = formData.entries();
    const data_holder = document.getElementById("data");
    data_holder.innerHTML = "";
    for (const [key, value] of data) {
      const p = document.createElement("p");
      p.textContent = `${key}: ${value}`;
      data_holder.appendChild(p);
    }
  });
});
