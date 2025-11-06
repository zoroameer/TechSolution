// Toggle mobile menu
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// WhatsApp form send
const form = document.getElementById("whatsappForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const number = "918610470466";
  const text = `👋 Hello, I'm ${name}.%0a📞 Phone: ${phone}%0a💬 Project: ${message}`;
  window.open(`https://wa.me/${number}?text=${text}`, "_blank");
});