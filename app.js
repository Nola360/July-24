const show_password = document.querySelector('.fas.fa-eye');
const hide_password = document.querySelector('.fas.fa-eye-slash');
const input_field = document.querySelector('.password_field');
const validation_box = document.querySelector('.validation');

show_password.addEventListener('click', function () {
  toggleIcon();
  togglePassword();
})

hide_password.addEventListener('click', function () {
  toggleIcon();
  togglePassword();
})

function togglePassword() {
  let input = document.querySelector('.password_field');
  if (input.type === 'password') {
    input.type = 'text'
  } else if (input.type === 'text') {
    input.type = 'password'
  }
}

function toggleIcon() {
  if (show_password) {
    hide_password.classList.toggle('active');
    show_password.classList.toggle('active');
  } else if (hide_password) {
    hide_password.classList.toggle('active');
    show_password.classList.toggle('active');
  }
}

// Validation Event Listners
input_field.addEventListener('click', form);
input_field.addEventListener('keyup', validation);

function form() {
  if (input_field) {
    validation_box.classList.add('active');
  }
}

function validation() {
  // var letters = /^[0-9]+$/;
  let input_field = document.querySelector('.password_field').value;
  let length = document.querySelector('.policy_length p');
  let numbers = document.querySelector('.policy_number p');
  let number_check = document.querySelector('.number_check');
  let capitals_check = document.querySelector('.capitals_check');
  let special_check = document.querySelector('.special_check');
  let uppercase = document.querySelector('.policy_uppercase p');
  let special = document.querySelector('.policy_special');
  let check = document.querySelector('.fas.fa-check');

  // Reg Expressions
  let number = /^(?=.*[0-9])/;
  let capitals = /(?=.*[A-Z])/;
  let specials = /(?=.*[!@#$%^&*])/;

  // Length Validation
  if (input_field.length >= 8) {
    length.style.color = 'rgb(33, 211, 33)';
    check.style.background = 'rgb(33, 211, 33)';
  } else if (input_field.length === 0) {
    length.style.color = 'silver';
    check.style.background = 'silver';
  } else {
    length.style.color = 'red';
    check.style.background = 'red'
  }
  // Number Validation
  if (input_field.match(number)) {
    numbers.style.color = 'rgb(33, 211, 33)';
    number_check.style.background = 'rgb(33, 211, 33)';
    // console.log(input_field);
  } else if (input_field === '') {
    numbers.style.color = 'silver';
    number_check.style.background = 'silver';
  } else {
    numbers.style.color = 'red';
    number_check.style.background = 'red';
  }

  // Capital Validation
  if (input_field.match(capitals)) {
    uppercase.style.color = 'rgb(33, 211, 33)';
    capitals_check.style.background = 'rgb(33, 211, 33)';
    // console.log(input_field);
  } else if (input_field === '') {
    uppercase.style.color = 'silver';
    capitals_check.style.background = 'silver';
  } else {
    uppercase.style.color = 'red';
    capitals_check.style.background = 'red';
  }

  // Special Charater Validation
  if (input_field.match(specials)) {
    special.style.color = 'rgb(33, 211, 33)';
    special_check.style.background = 'rgb(33, 211, 33)';
    // console.log(input_field);
  } else if (input_field === '') {
    special.style.color = 'silver';
    special_check.style.background = 'silver';
  } else {
    special.style.color = 'red';
    special_check.style.background = 'red';
  }
}


