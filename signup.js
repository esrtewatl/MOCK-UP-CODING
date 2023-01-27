const USERS_URL = "https://social-media-mock-up-default-rtdb.firebaseio.com/newusers";
const EXT = `.json`;




const email = document.getElementById("emailInput").value;
const password = document.getElementById("passwordInput");
const name = document.getElementById("userName");
const dob = document.getElementById("dateInput");

const users= {
  "email":document.getElementById("emailInput").value,
  "password":document.getElementById("passwordInput").value,
  "userName":document.getElementById("userName").value,
  "dob":document.getElementById("dateInput").value
};

document.getElementById("create-btn").addEventListener("click", (event) => {
  event.preventDefault();


  fetch(`${USERS_URL}${EXT}`, {
    method: "POST",
    body: JSON.stringify(users),
    // headers: {
    //   "Content-Type": "application/json"
    // }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Handle successful user creation
    })
    .catch((error) => {
      console.error(error);
      // Handle error
    });
});
