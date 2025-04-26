// Animación de entrada
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".sidebar", { x: -100, opacity: 0, duration: 1, ease: "power2.out" });
  gsap.from(".card", { y: 50, opacity: 0, duration: 1, delay: 0.3, stagger: 0.2 });
});

// Tema claro/oscuro
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const sunIcon = document.querySelector(".theme-icon.sun");
const moonIcon = document.querySelector(".theme-icon.moon");
function updateThemeIcon() {
  if (body.classList.contains("dark")) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  } else {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }
}
function toggleTheme() {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
  updateThemeIcon();
}
themeToggle.addEventListener("click", toggleTheme);
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
  updateThemeIcon();
});
