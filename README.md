<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lose Weight Now - Ask Me How</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header>
    <div class="container">
      <h1>Lose Weight Now</h1>
      <p>Ask Me How!</p>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h2>Transform Your Health Today</h2>
      <p>I help people get fit, lose weight, and stay healthy—naturally.</p>
      <a href="#contact" class="btn">Contact Me</a>
    </div>
  </section>
  <section class="health-risks">
  <div class="container">
    <h2>Why Losing Weight Matters</h2>
    <p>Excess body fat isn’t just about appearance — it can lead to serious health problems. Here are some common issues caused by being overweight:</p>
    <ul>
      <li>High blood pressure (hypertension)</li>
      <li>Type 2 diabetes</li>
      <li>Heart disease and stroke</li>
      <li>Sleep apnea and breathing problems</li>
      <li>Joint pain and osteoarthritis</li>
      <li>Increased risk of some cancers (e.g., breast, colon)</li>
      <li>Fatty liver disease</li>
      <li>Low energy and chronic fatigue</li>
      <li>Low self-esteem and mental health issues</li>
    </ul>
    <p><strong>Good news:</strong> Losing even a small amount of weight can reduce your risk and improve your overall well-being.</p>
  </div>
</section>
<section class="hero">
  <div class="container">
    <h2>Transform Your Health Today</h2>
    <p>I help people get fit, lose weight, and stay healthy—naturally.</p>
    <p><strong>We provide you a balanced diet in the form of nutrition, customized for your health goals.</strong></p>
  </div>
</section>
<section class="register-cta">
  <div class="container">
    <h2>Free Body Checkup Offer!</h2>
    <p>Register now to get a <strong>free offline body checkup</strong> and receive personalized health guidance.</p>
    <a href="#contact" class="btn">Register Now</a>
  </div>
  <section class="one-month-guidance">
  <div class="container">
    <p><strong>Come to our place — we provide full guidance for 1 month to help you stay on track with your health goals.</strong></p>
  </div>
</section>

</section>




<section id="contact" class="contact">
  <div class="container">
    <h2>Register for Free Body Checkup</h2>
    <form id="whatsappForm">
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="tel" id="phone" placeholder="Phone Number" required />
      <select id="mode">
        <option value="Offline">Join Offline</option>
        <option value="Online">Join Online</option>
      </select>
      <button type="submit">Register on WhatsApp</button>
    </form>
  </div>
</section>

<section class="results">
  <div class="container">
    <h2>Genuine Results, Real Transformations</h2>
    <p>We are proud to share that many of our clients have successfully reduced weight, improved their health, and boosted their confidence through our 1-on-1 guidance and balanced nutrition plans.</p>
    <ul>
      <li><strong>5–10 kg weight loss</strong> within the first month for many clients.</li>
      <li><strong>Visible inch loss</strong> and improved energy levels.</li>
      <li><strong>Better digestion, sleep, and reduced sugar cravings.</strong></li>
      <li>100% safe and natural nutrition-based approach — no crash diets or side effects.</li>
    </ul>
    <p><strong>Your transformation could be next — join us today!</strong></p>
  </div>
</section>


  <section id="location" class="location">
  <div class="container">
    <h2>Our Location</h2>
    <p>Visit us at: <strong>Sootmill Chauraha, GT Road, Aligarh, Uttar Pradesh 202001</strong></p>
    <div class="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.4989205620483!2d78.04792772063244!3d27.904023482450807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a445e11aaf3b%3A0xca82a4da34345981!2sSaini%20Medical%20Store!5e0!3m2!1sen!2sin!4v1746977366716!5m2!1sen!2sin" 
        width="100%" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>


  <footer>
    <div class="container">
      <p>&copy; 2025 Lose Weight Now. All rights reserved.</p>
    </div>
  </footer>
 

<script src="script.js"></script>

</body>
</html>
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
  const whatsappNumber = "918410251791"; // 👈 CHANGE this to your WhatsApp number!

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, "_blank");
});
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #fff;
  color: #333;
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding: 1em;
  text-align: center;
}

/* Header */
header {
  background: #27ae60;
  color: white;
  padding: 2em 0 1em;
}

header h1 {
  margin: 0;
  font-size: 2em;
}

header p {
  margin: 0.5em 0;
  font-size: 1.2em;
}

/* Hero Section */
.hero {
  background: #eafaf1;
  padding: 3em 1em;
}

.hero h2 {
  color: #2c3e50;
  margin-bottom: 0.5em;
}

.hero p {
  font-size: 1.1em;
  margin-bottom: 1em;
}

.btn {
  background: #27ae60;
  color: white;
  padding: 0.8em 1.5em;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

/* Contact Section */
.contact {
  padding: 3em 1em;
  background: #f9f9f9;
}

.contact a {
  color: #27ae60;
  text-decoration: none;
}

/* Footer */
footer {
  background: #2c3e50;
  color: white;
  padding: 1em 0;
}
.health-risks {
  background: #fff6f0;
  padding: 3em 1em;
  text-align: left;
}

.health-risks h2 {
  color: #d35400;
  text-align: center;
  margin-bottom: 0.5em;
}

.health-risks p {
  font-size: 1.1em;
  margin-bottom: 1em;
  color: #555;
}

.health-risks ul {
  list-style: disc;
  padding-left: 1.5em;
  font-size: 1em;
  line-height: 1.8;
}
strong {
  color: #2c7a4b;
}
.register-cta {
  background-color: #fff3cd;
  padding: 3em 1em;
  text-align: center;
  border-top: 2px solid #ffeeba;
  border-bottom: 2px solid #ffeeba;
}

.register-cta h2 {
  color: #856404;
  margin-bottom: 0.5em;
}

.register-cta p {
  font-size: 1.1em;
  margin-bottom: 1em;
  color: #6c5100;
}
.online-option {
  background-color: #f0fff4;
  padding: 1.5em 1em;
  text-align: center;
  font-size: 1.1em;
  color: #146356;
  border-top: 2px solid #ccf5e7;
}

.online-option strong {
  color: #0c6b58;
}
.results {
  background-color: #fef9f1;
  padding: 3em 1em;
  text-align: center;
  color: #5a3e1b;
}

.results h2 {
  color: #d35400;
  margin-bottom: 1em;
}

.results ul {
  text-align: left;
  max-width: 600px;
  margin: 0 auto 1.5em;
  list-style-type: disc;
  padding-left: 1.5em;
  line-height: 1.8;
}
