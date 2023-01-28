
const USERS_URL = "https://social-media-mock-up-default-rtdb.firebaseio.com/users";
const EXT = `.json`;

//this is code for Javascript validationwith no fetch:
// let objPeople = [
//     {email:"samR@gmail.com",
//     password:"bullet"},
//     {email:"markT@gmail.com",
//     password:"rockwithus"},
//     {email:"estewartATL@gmail.com",password:"password"}    
// ]





// let loginForm = document.getElementById("loginform");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let resultBox = document.getElementById("result-box");

// Add form submit event listener
// loginForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Get email and password
//     let emailValue = email.value;
//     let passwordValue = password.value;

//     // Validate email and password against objPeople
//     let isValid = false;
//     for (let i = 0; i < objPeople.length; i++) {
//         if (objPeople[i].email === emailValue && objPeople[i].password === passwordValue) {
//             isValid = true;
//             break;
//         }
//     }

//     if (isValid) {
//         // Email and password are valid
//         // Redirect to dashboard
//         window.location.href = "db2.html";
//     } else {
//         // Invalid email or password
//        alert("Invalid email or password");
//     }
// });
const loginform = document.getElementById("loginform");
loginform.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  const user = {email, password, remember};

  fetch(USERS_URL + EXT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        // Handle error
        console.log(data.error);
      } else {
        // Handle successful login
        console.log(data);
        window.location.href = "db2.html";
      }
    })
    .catch(error => console.error(error));
});