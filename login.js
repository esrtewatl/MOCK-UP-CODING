let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("floatingEmail").value;
    let password = document.getElementById("floatingPassword").value;
    let remember = document.getElementById("remember").checked;

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
          window.location.href = "db2.html";
      })
      .catch(error => {
          console.log(error);
          // Handle errors here
      });
});

