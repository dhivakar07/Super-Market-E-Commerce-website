document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  const productSections = document.querySelectorAll(
    ".product-container section",
  );
  productSections.forEach((section) => (section.style.display = "none"));
  const defaultSection = document.getElementById("fruits");
  if (defaultSection) {
    defaultSection.style.display = "block";
  }

  function showCategory(categoryId) {
    productSections.forEach((section) => (section.style.display = "none"));
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

      //When click the category it will change bg-color
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
});

// Cart sidebar
const closecart = document.querySelector(".close-card-icon");
const cardsidenav = document.querySelector(".cart-sidenav");
const carticon = document.querySelector(".cart-icon");
carticon.addEventListener("click", function () {
  cardsidenav.style.right = 0;
});
closecart.addEventListener("click", function () {
  cardsidenav.style.right = "-40%";
});

// Cart add in sidebar
const addbtn = document.querySelectorAll(".add-btn");
const cartlist = document.querySelector(".cart-list");
addbtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    //add color for addbtn when i click
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    //add li in cartlist
    const product = btn.closest(".product");
    const name = product.querySelector(".product-name").textContent;
    const li = document.createElement("li");
    li.innerHTML = `${name}<p class="cart_list-remove">Remove</p>`;
    cartlist.appendChild(li);

    //remove products in cart
    const removebtn = li.querySelector(".cart_list-remove");
    removebtn.addEventListener("click", function () {
      li.remove();
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    //Cart have list carticon color change
    const carticon = document.querySelector(".cart-icon");
    const count = cartlist.children.length;
    if (count === 0) {
      carticon.style.color = "black";
    } else {
      carticon.style.color = "red";
    }
  });
});
