function nextLog(){

window.location.href = "login.html";

}
function nextSign(){

  window.location.href = "signup.html";
  
  }
  


  function sendFeedback() {
    var email = document.getElementById('newsletter1').value;
    if (email) {
      if (email.includes("@")) {
        alert("Feedback sent!");
      } else {
        alert("Please input a valid email address.");
      }
    } else {
      alert("Please input an email address.");
    }

    var email = document.getElementById('newsletter1').value = "";
  }

