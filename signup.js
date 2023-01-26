const apiKey = "YOUR_API_KEY";
const databaseURL = "YOUR_DATABASE_URL";

fetch('https://your-firebase-app.firebaseio.com/users.json', {
  method: 'POST',
  body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});


const formContainer = document.querySelector('.form-container');
const usernameInput = formContainer.querySelector('#form3Example1cg');
const emailInput = formContainer.querySelector('#form3Example3cg');
const passwordInput = formContainer.querySelector('#form3Example4cg');
const repeatPasswordInput = formContainer.querySelector('#form3Example4cdg');
const dobInput = formContainer.querySelector('#form3Example3cg');
const termsCheckbox = formContainer.querySelector('#form2Example3cg');
const createBtn = formContainer.querySelector('.create-btn');

createBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const repeatPassword = repeatPasswordInput.value;
  const dob = dobInput.value;
  const terms = termsCheckbox.checked;

//   if (username === '' || email === '' || password === '' || repeatPassword === '' || dob === '') {
//     alert('Please fill out all fields');
//     return;
//   }

//   if (password !== repeatPassword) {
//     alert('Passwords do not match');
//     return;
//   }

//   if (!terms) {
//     alert('Please accept the terms of service');
//     return;
//   }

//   // Send user information to server to create account
// });




