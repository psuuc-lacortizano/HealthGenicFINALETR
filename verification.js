const validateButton = document.querySelector('.validate');
const inputs = document.querySelectorAll('.inputs input');

validateButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  let isFilled = true;

  inputs.forEach(input => {
    if (input.value === '') {
      isFilled = false;
    }
  });

  if (!isFilled) {
    alert('Please enter the verification code.');
    clearInputs();
    return false;
  } else if (inputs.length !== 6) {
    alert('Please fill up the complete verification code.');
    clearInputs();
    return false;
  } else {
    // Code for further processing if all inputs are filled
    alert("Code Confirmed!");
    window.location.href = "resetingpassword.html";
  }
});

function clearInputs() {
  inputs.forEach(input => {
    input.value = '';
  });
}
