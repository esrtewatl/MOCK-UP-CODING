import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjqlUnnQsOydcM4XSX7eO2bh08gndDLQA",
  authDomain: "login-page-spacebook.firebaseapp.com",
  projectId: "login-page-spacebook",
  storageBucket: "login-page-spacebook.appspot.com",
  messagingSenderId: "501666617517",
  appId: "1:501666617517:web:96ff7879a0291d453dce24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("#email").value;
    let password = document.getElementById("#password").value;
    let remember = document.getElementById("#remember").checked;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      // Invalid email
      alert("Please enter a valid email address");
      return;
  }

  // Validate password
  if (passwordValue.length < 8) {
      // Password too short
      alert("Password must be at least 8 characters long");
      return;
  }

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(() => {
          // Save remember me status in local storage
          localStorage.setItem("remember", rememberValue);
          // Redirect to dashboard
          window.location.replace()("dashboard.html");
      })
      .catch(error => {
          console.log(error);
          // Handle errors here
      });
});

