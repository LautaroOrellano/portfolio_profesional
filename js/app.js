document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const themeToggle = document.getElementById("theme-toggle");
  const sun = '<img src="images/iconos/sun.svg" alt="Sun" />';
  const moon = '<img src="images/iconos/moon.svg" alt="Moon" />';

  themeToggle.innerHTML = document.body.classList.contains("dark-theme")
    ? sun
    : moon;

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.innerHTML = document.body.classList.contains("dark-theme")
      ? sun
      : moon;
  });
});
