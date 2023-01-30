
const USERS_URL = "https://social-media-mock-up-default-rtdb.firebaseio.com/users";
const EXT = `.json`;

const checkbox = document.getElementById("remember");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    // Save the checkbox state using localStorage or a cookie
  } else {
    // Remove the saved state
  }
});

if (checkbox.checked) {
  localStorage.setItem("remember", "true");
} else {
  localStorage.removeItem("remember");
}

if (checkbox.checked) {
  Cookies.set("remember", "true", { expires: 7 });
} else {
  Cookies.remove("remember");
}

//get id for form
const loginform = document.getElementById("loginform");
//Function for submitting form
loginform.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  const user = {email, password, remember};
//fetch call 
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