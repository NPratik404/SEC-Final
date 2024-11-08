const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Add functionality for bid buttons (example)
document.querySelectorAll(".car__card .btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Bid feature coming soon!");
  });
});
