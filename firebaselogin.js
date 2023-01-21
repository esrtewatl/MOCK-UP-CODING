// Initialize Firebase
firebase.initializeApp({
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  databaseURL: "your_database_url",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
});

// Get form elements
let loginForm = document.getElementById("loginForm");
let email = document.getElementById("email");
let password = document.getElementById("password");
let remember = document.getElementById("remember");

// Add form submit event listener
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get email and password
  let emailValue = email.value;
  let passwordValue = password.value;
  let rememberValue = remember.checked;

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(() => {
          // Save remember me status in local storage
          localStorage.setItem("remember", rememberValue);
          // Redirect to dashboard
          window.location.href = "dashboard.html";
      })
      .catch(error => {
          console.log(error);
          // Handle errors here
      });
});
