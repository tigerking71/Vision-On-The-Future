document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('register-success').style.display = 'block';
});
