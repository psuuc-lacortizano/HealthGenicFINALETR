function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting and page reload

    // Get the form input values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var ccName = document.getElementById("cc-name").value;
    var ccNumber = document.getElementById("cc-number").value;

    // Perform validation
    if (firstName === "" || lastName === "" || username === "" || address === "" || country === "" || ccName === "" || ccNumber === "") {
      alert("Please fill out all required fields.");
    } else {
      // Redirect to the pricing.html page
      alert("Confirm Purchased");
      window.location.href = "pricing.html";
    }
  }

  // Add event listener to the form submit button
  var form = document.getElementById("checkout-form");
  var submitButton = form.querySelector("button[type=submit]");
  submitButton.addEventListener("click", validateForm);