// add javascript here
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}