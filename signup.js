const USERS_URL = "https://social-media-mock-up-default-rtdb.firebaseio.com/newusers";
const EXT = `.json`;




const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const name = document.getElementById("userName");
const dob = document.getElementById("dateInput");

const users= {
  "email":email.value,
  "password":password.value,
  "userName":name.value,
  "dob":dob.value
};

document.getElementById("create-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const users= {
    "email":email.value,
    "password":password.value,
    "userName":name.value,
    "dob":dob.value
  };
  

  fetch(`${USERS_URL}${EXT}`, {
    method: "PUT",
    body: JSON.stringify(users),
    // headers: {
    //   "Content-Type": "application/json"
    // }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(users);
      window.location.href = "db2.html";
      // Handle successful user creation
    })
    .catch((error) => {
      console.error(error);
      // Handle error
    });
});
