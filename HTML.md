**<!DOCTYPE html>**

**<html lang="en">**

**<head>**

  **<meta charset="UTF-8" />**

  **<meta name="viewport" content="width=device-width, initial-scale=1.0" />**

  **<title>Vision Expo Marketing</title>**

  **<link rel="stylesheet" href="styles.css" />**

**</head>**

**<body>**

  **<header>**

    **<h1>Vision Expo 2026</h1>**

    **<p>Shaping the Future of Optical Innovation</p>**

    **<a href="#contact" class="cta-button">Join Us</a>**

  **</header>**



  **<section id="about">**

    **<h2>About Us</h2>**

    **<p>We help optical brands shine at Vision Expo through strategic marketing, booth design, and lead generation.</p>**

  **</section>**



  **<section id="services">**

    **<h2>Our Services</h2>**

    **<ul>**

      **<li>Marketing Strategy Consulting</li>**

      **<li>Booth Design \& Branding</li>**

      **<li>Lead Capture \& CRM Setup</li>**

      **<li>Social Media Campaigns</li>**

      **<li>Press Kit \& PR Support</li>**

    **</ul>**

  **</section>**



  **<section id="event">**

    **<h2>Event Info</h2>**

    **<p>📍 Orlando, FL | 🗓 March 12–14, 2026</p>**

    **<p>Countdown to Vision Expo: <span id="countdown"></span></p>**

  **</section>**



  **<section id="contact">**

    **<h2>Contact Us</h2>**

    **<form>**

      **<input type="text" placeholder="Your Name" required />**

      **<input type="email" placeholder="Your Email" required />**

      **<textarea placeholder="Your Message"></textarea>**

      **<button type="submit">Send Message</button>**

    **</form>**

  **</section>**



  **<footer>**

    **<p>\&copy; 2025 Vision Expo Marketing. All rights reserved.</p>**

  **</footer>**



  **<script>**

    **// Countdown Timer**

    **const countdown = document.getElementById("countdown");**

    **const eventDate = new Date("March 12, 2026").getTime();**

    **const updateCountdown = () => {**

      **const now = new Date().getTime();**

      **const distance = eventDate - now;**

      **const days = Math.floor(distance / (1000 \* 60 \* 60 \* 24));**

      **countdown.textContent = `${days} days to go!`;**

    **};**

    **setInterval(updateCountdown, 1000);**

  **</script>**

**</body>**

**</html>**

