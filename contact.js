//Side Navbar
const sidenavbar = document.getElementById("sidenavbar");
const menuicon = document.getElementById("menuicon");
const closenavbar = document.getElementById("closenavbar");

menuicon.addEventListener("click", () => {
  sidenavbar.style.right = "0";
});

closenavbar.addEventListener("click", () => {
  sidenavbar.style.right = "-40%";
});
