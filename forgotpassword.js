function resetPassword() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (newPassword === "" || confirmPassword === "") {
      alert("Please enter both new password and confirm password.");
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else {

      alert("Password reset successful. You can now log in with your new password.");
      window.location.href = "login.html";
    }
  }
  