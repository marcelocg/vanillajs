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

function checkEmailFormat(field) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(field.value.trim().toLowerCase())) {
    showSuccess(field);
  } else {
    showError(field, `${field.name} is not valid!`);
  }
}

function checkRequired(fields) {
  fields.forEach(field => {
    if (field.value.trim() === '') {
      showError(field, `${field.name} is required`);
    } else {
      showSuccess(field);
    }
  });
}

function checkLength(field, min) {
  if (field.value.trim().length < min) {
    showError(field, `${field.name} must be at least ${min} characters`);
  } else {
    showSuccess(field);
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password]);

  checkLength(username, 3);
  checkLength(password, 6);

  checkEmailFormat(email);

 if (confirmation_password.value != password.value) {
    showError(confirmation_password, 'Passwords do not match!');
  } else {
    showSuccess(confirmation_password);
  }

})
