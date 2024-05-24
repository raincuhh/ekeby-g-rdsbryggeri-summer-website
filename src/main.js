let refresh = document.getElementById("refresh");

refresh.addEventListener("click", () => {
  location.reload();
});

let form = document.getElementById("entryForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("du er registrert i konkuransen!");
});
