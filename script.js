document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Basic frontend feedback
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name && email) {
    document.getElementById('formMessage').textContent = "Thank you for registering, " + name + "! We'll be in touch soon.";
    this.reset();
  } else {
    document.getElementById('formMessage').textContent = "Please complete all required fields.";
  }
});