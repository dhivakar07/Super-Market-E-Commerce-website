// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  let successMsg = document.getElementById("successMsg");

  successMsg.innerText = "";

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter valid email!");
    return;
  }

  if (phone.length < 10) {
    alert("Enter valid phone number!");
    return;
  }

  successMsg.innerText = "Message sent successfully!";
  document.getElementById("contactForm").reset();
});


// SIDE NAVBAR FUNCTION
let menu = document.getElementById("menuicon");
let sidenav = document.getElementById("sidenavbar");
let close = document.getElementById("closenavbar");

menu.addEventListener("click", function () {
  sidenav.style.right = "0";
});

close.addEventListener("click", function () {
  sidenav.style.right = "-40%";
});