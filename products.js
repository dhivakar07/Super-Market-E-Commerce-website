document.addEventListener("DOMContentLoaded", () => {
  // Grab all category buttons
  const categories = document.querySelectorAll(".category");

  // Grab all product sections
  const productSections = document.querySelectorAll(".product-container section");

  // Hide all sections initially
  productSections.forEach(section => section.style.display = "none");

  // Show Fruits section by default
  const defaultSection = document.getElementById("fruits");
  if (defaultSection) {
    defaultSection.style.display = "block";
  }

  // Function to show selected category
  function showCategory(categoryId) {
    // Hide all sections
    productSections.forEach(section => section.style.display = "none");

    // Show the selected section
    const selectedSection = document.getElementById(categoryId);
    if (selectedSection) {
      selectedSection.style.display = "block";
    }
  }

  // Add click event to each category
  categories.forEach(category => {
    category.addEventListener("click", () => {
      // Convert category text to lowercase and remove spaces
      const categoryName = category.textContent.trim().toLowerCase().replace(/\s+/g, "");
      
      // Example: "Dairy & Milk Products" → "dairy&milkproducts"
      showCategory(categoryName);
    });
  });
});
