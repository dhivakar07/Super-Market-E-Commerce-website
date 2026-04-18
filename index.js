// Dynamic rotating headline
const headlines = [
  "Healthy & Fresh Groceries",
  "Delivered Right to Your Door",
  "Save Big on Organic Produce",
  "Freshness You Can Trust",
];
let hIndex = 0;
const headlineEl = document.getElementById("headline");

setInterval(() => {
  hIndex = (hIndex + 1) % headlines.length;
  headlineEl.textContent = headlines[hIndex];
}, 4000);

document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.getElementById("signupBtn");
  const popup = document.getElementById("loginPopup");
  const closeBtn = document.querySelector(".closeBtn");

  const loginBtn = document.getElementById("loginBtn");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");

  const togglePassword = document.getElementById("togglePassword");

  // OPEN POPUP
  signupBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  // CLOSE POPUP
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // LOGIN CHECK
  loginBtn.addEventListener("click", function () {
    userError.textContent = "";
    passError.textContent = "";

    let valid = true;

    if (username.value.trim() === "") {
      userError.textContent = "Username is required";
      valid = false;
    }

    if (password.value.trim() === "") {
      passError.textContent = "Password is required";
      valid = false;
    }

    if (valid) {
      if (username.value === "Naveetha" && password.value === "123456") {
        alert("Login Successfully");
        popup.style.display = "none";
        username.value = "";
        password.value = "";
      } else {
        passError.textContent = "Wrong username or password";
      }
    }
  });
});

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
