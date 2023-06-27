  document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form values
        var firstname = document.getElementById("firstName").value;
        var email = document.getElementById("emailAddress").value;
        var lastname = document.getElementById("lastName").value;
        var phonenumber = document.getElementById("phoneNumber").value;

        var missingFields = [];

        if (firstname === "") {
            missingFields.push("First name");
        }

        if (email === "") {
            missingFields.push("Email");
        }

        if (lastname === "") {
            missingFields.push("Last name");
        }

        if (phonenumber === "") {
            missingFields.push("Phone Number");
        }

        if (missingFields.length > 0) {
            var message = "Please fill in the following fields:\n\n" + missingFields.join("\n");
            alert(message);
        } else {
            alert("Form Submitted");
            window.location.href = "dash.html";
        }
    });
    