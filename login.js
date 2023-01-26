let objPeople = [
    {email:"samR@gmail.com",
    password:"bullet"},
    {email:"markT@gmail.com",
    password:"rockwithus"},
    {email:"estewartATL@gmail.com",password:"password"}    
]






let loginForm = document.getElementById("loginform");
let email = document.getElementById("email");
let password = document.getElementById("password");
let resultBox = document.getElementById("result-box");

// Add form submit event listener
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get email and password
    let emailValue = email.value;
    let passwordValue = password.value;

    // Validate email and password against objPeople
    let isValid = false;
    for (let i = 0; i < objPeople.length; i++) {
        if (objPeople[i].email === emailValue && objPeople[i].password === passwordValue) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        // Email and password are valid
        // Redirect to dashboard
        window.location.href = "db2.html";
    } else {
        // Invalid email or password
        resultBox.innerHTML = "Invalid email or password";
    }
});
