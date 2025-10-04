
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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

// Mostrar botón WhatsApp cuando el scroll baja más de 200px
window.addEventListener("scroll", () => {
  const btn = document.getElementById("whatsapp-float");
  if(window.scrollY > 200){
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  } else {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
});

// ==================== FORMULARIO DE CONTACTO ====================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar EmailJS con tu clave pública
  emailjs.init("qLrljyhonXlsIP_Nt");

  const contactForm = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      status.textContent = "Enviando mensaje...";
      status.style.color = "white";

      const templateParams = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value,
        time: new Date().toLocaleString(),
      };

      emailjs
        .send("service_ecdza3i", "template_feng11h", templateParams)
        .then(() => {
          status.style.color = "limegreen";
          status.textContent = "✅ Mensaje enviado con éxito";
          contactForm.reset();
        })
        .catch((error) => {
          console.error("Error al enviar el email:", error);
          status.style.color = "red";
          status.textContent =
            "❌ Hubo un problema al enviar el mensaje. Intentalo de nuevo.";
        });
    });
  }
});


