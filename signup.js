// signup.js

window.addEventListener('DOMContentLoaded', function () {
  // Get the form and submit button
  var form = document.querySelector('form');
  var submitButton = document.getElementById('submit');

  // Add a click event listener to the submit button
  submitButton.addEventListener('click', function (event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the form fields
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirmpassword');

    // Create an array to store the missing fields
    var missingFields = [];

    // Check if any field is empty and add it to the missingFields array
    if (usernameField.value === '') {
      missingFields.push('Email address');
    }
    if (passwordField.value === '') {
      missingFields.push('Password');
    }
    if (confirmPasswordField.value === '') {
      missingFields.push('Confirm Password');
    }

    
    // Check if any fields are missing
if (missingFields.length > 0) {
  showAlert('Please fill in the following fields: ' + missingFields.join(', '));
  clearFields();
} else if (passwordField.value !== confirmPasswordField.value) {
  showAlert('Password and Confirm Password do not match.');
  clearForm();
} else {
  // All fields are filled and passwords match, submit the form
  alert("Form Submitted!")
  clearFields();
  window.location.href = "registration.html";
}

  });

  // Function to display an alert message
  function showAlert(message) {
    alert(message);
  }
});
function clearFields(){

  var usernameField = document.getElementById('username').value = "";
    var passwordField = document.getElementById('password').value = "";
    var confirmPasswordField = document.getElementById('confirmpassword').value = "";

}
function clearForm(){

    var passwordField = document.getElementById('password').value = "";
    var confirmPasswordField = document.getElementById('confirmpassword').value = "";

}