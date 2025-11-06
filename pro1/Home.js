// Mobile Menu Toggle
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// // From js
// const form = document.getElementById('problemForm');
// const successMsg = document.getElementById('successMessage');

// form.addEventListener('submit', function(e) {
//   e.preventDefault(); // prevent real submission

//   // get input values (optional: you can log or send to backend)
//   const name = document.getElementById('name').value;
//   const phone = document.getElementById('phone').value;
//   const problem = document.getElementById('problem').value;
//   const deadline = document.getElementById('deadline').value;

//   // Simple validation
//   if (name && phone && problem && deadline) {
//     successMsg.style.display = 'block';
//     successMsg.textContent = `Thanks ${name}, we’ll contact you soon to solve your issue before ${deadline}.`;
//     form.reset();
//   }
// });

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let problem = document.getElementById("problem").value;

  // Replace with your WhatsApp number (with country code, no + or spaces)
  let whatsappNumber = "918610470466"; // Example: 919876543210

  let message = `👋 Hello!%0aMy name: ${name}%0aPhone: ${phone}%0aProblem: ${problem}`;
  let link = `https://wa.me/${whatsappNumber}?text=${message}`;
  
  window.open(link, "_blank");
});
