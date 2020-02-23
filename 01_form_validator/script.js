const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation_password = document.getElementById("confirmation_password");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required!');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required!');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid!');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required!');
  } else {
    showSuccess(password);
  }

  if (confirmation_password.value === '') {
    showError(confirmation_password, 'Password confirmation is required!');
  } else if (confirmation_password.value != password.value) {
    showError(confirmation_password, 'Passwords do not match!');
  } else {
    showSuccess(confirmation_password);
  }

})
