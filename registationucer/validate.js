function validateName() {
    var name = document.getElementById("name").value;
    var pattern = /^[a-zA-Z ]{2,30}$/;
    if (pattern.test(name)) {
        return true;
    } else {
        alert("Please enter a valid name");
        return false;
    }
}

function validateMobile() {
    var mobile = document.getElementById("mobile").value;
    var pattern = /^[0-9]{10}$/;
    if (pattern.test(mobile)) {
        return true;
    } else {
        alert("Please enter a valid mobile number");
        return false;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    if (pattern.test(email)) {
        return true;
    } else {
        alert("Please enter a valid email");
        return false;
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (pattern.test(password)) {
        return true;
    } else {
        alert("Please enter a valid password. Password must contain at least one digit and one special character");
        return false;
    }
}

function validateForm() {
    if (validateName() && validateMobile() && validateEmail() && validatePassword()) {
        alert("Form submitted successfully");
        return true;
    } else {
        return false;
    }
}

document.getElementById("form").addEventListener("submit", validateForm);