const closecart = document.querySelector(".close-card-icon");
const cardsidenav = document.querySelector(".cart-sidenav");
const carticon = document.querySelector(".cart-icon");
carticon.addEventListener("click", function () {
  cardsidenav.style.right = 0;
});
closecart.addEventListener("click", function () {
  cardsidenav.style.right = "-40%";
});
