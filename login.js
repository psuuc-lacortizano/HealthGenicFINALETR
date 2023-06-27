// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Check if the credentials match (example check)
  if (email === 'ado25@gmail.com' && password === 'fitness123') {
    // Credentials match, perform desired action (e.g., redirect to dashboard)
    alert('Login Successfully!');
    window.location.href = 'dash.html';
  } else if (email === '') {
    alert('Please input your email.');
  } else if (password === '') {
    alert('Please input your password.');
  } else {
    // Credentials don't match, display alert
    alert('Invalid email or password. Please try again.');
  }

  // Clear the form inputs
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}
