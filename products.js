document.addEventListener("DOMContentLoaded", () => {
  // Grab all category buttons
  const categories = document.querySelectorAll(".category");

  // Grab all product sections
  const productSections = document.querySelectorAll(
    ".product-container section",
  );

  // Hide all sections initially
  productSections.forEach((section) => (section.style.display = "none"));

  // Show Fruits section by default
  const defaultSection = document.getElementById("fruits");
  if (defaultSection) {
    defaultSection.style.display = "block";
  }

  // Function to show selected category
  function showCategory(categoryId) {
    // Hide all sections
    productSections.forEach((section) => (section.style.display = "none"));

    // Show the selected section
    const selectedSection = document.getElementById(categoryId);
    if (selectedSection) {
      selectedSection.style.display = "block";
    }
  }

  // Add click event to each category
  categories.forEach((category) => {
    category.addEventListener("click", () => {
      const categoryName = category.textContent.trim().toLowerCase();
      showCategory(categoryName);
    });

    category.addEventListener("click", function (event) {
      categories.forEach(function (catelist) {
        catelist.style.backgroundColor = "";
        catelist.style.color = "";
      });
      event.target.style.backgroundColor = "#329537";
      event.target.style.color = "white";
    });
  });
});

// Cart sidebar functionality
const closecart = document.querySelector(".close-card-icon");
const cardsidenav = document.querySelector(".cart-sidenav");
const carticon = document.querySelector(".cart-icon");
carticon.addEventListener("click", function () {
  cardsidenav.style.right = 0;
});
closecart.addEventListener("click", function () {
  cardsidenav.style.right = "-40%";
});
