let refresh = document.getElementById("refresh");

refresh.addEventListener("click", () => {
  location.reload();
});

let form = document.getElementById("entryForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  console.log("email: " + email + ", tel: " + phone);
  alert("du er med i konkurransen!");
});
