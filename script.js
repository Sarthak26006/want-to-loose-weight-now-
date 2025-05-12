document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const mode = document.getElementById("mode").value;

  if (!name || !phone || !mode) {
    alert("Please fill all the details.");
    return;
  }

  const message = `Hello, I want to register for the free body checkup.%0AName: ${name}%0APhone: ${phone}%0AMode: ${mode}`;
  
  // Replace this with your actual WhatsApp number (country code + number, no + or spaces)
  const whatsappNumber = "919259502309"; // 👈 CHANGE this to your WhatsApp number!

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, "_blank");
});

