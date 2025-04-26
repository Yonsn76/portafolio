
// Animación de entrada
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".sidebar", { x: -100, opacity: 0, duration: 1, ease: "power2.out" });
  gsap.from(".hero .card", { y: 50, opacity: 0, duration: 1, delay: 0.3, stagger: 0.2 });
});

const sobreMiTexto = `Me llamo Yonsn y soy un apasionado del mundo de la programación y el desarrollo de software.
Desde que descubrí cómo funciona la tecnología detrás de las aplicaciones que usamos a diario, supe que quería dedicarme a crear soluciones útiles, accesibles y eficientes.

Actualmente me estoy formando como desarrollador junior, con conocimientos en Python, Java, JavaScript, Git y herramientas de diseño como Figma. Me gusta tanto el frontend como el backend y disfruto creando interfaces limpias y funcionales.

Me considero una persona curiosa, autodidacta y constante. Me esfuerzo por escribir código limpio y aprender continuamente nuevas tecnologías. Además, me interesa el diseño de interfaces intuitivas, la inteligencia artificial y el desarrollo de productos con impacto social.

Fuera del código, soy alguien con mucha iniciativa, motivado por los desafíos y con ganas de crecer profesionalmente. ¡Estoy listo para aportar a cualquier equipo!`;

let i = 0;
const speed = 18; // velocidad de tipeo (ms)
function typeSobreMi() {
  const typingEl = document.getElementById("console-typing");
  if (typingEl && i < sobreMiTexto.length) {
    typingEl.textContent += sobreMiTexto.charAt(i);
    i++;
    setTimeout(typeSobreMi, speed);
  }
}
document.getElementById("btnSobreMi").addEventListener("click", () => {
  document.getElementById("sobre-mi").classList.add("visible");
  document.getElementById("modal-backdrop").classList.add("visible");
  // Reiniciar el efecto de tipeo
  const typingEl = document.getElementById("console-typing");
  if (typingEl) typingEl.textContent = "";
  i = 0;
  typeSobreMi();
  gsap.to(document.getElementById("sobre-mi"), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  });
});
document.getElementById("closeSobreMi").addEventListener("click", () => {
  document.getElementById("sobre-mi").classList.remove("visible");
  document.getElementById("modal-backdrop").classList.remove("visible");
});
document.getElementById("modal-backdrop").addEventListener("click", () => {
  document.getElementById("sobre-mi").classList.remove("visible");
  document.getElementById("modal-backdrop").classList.remove("visible");
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
