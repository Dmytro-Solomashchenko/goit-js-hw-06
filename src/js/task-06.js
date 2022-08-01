const input = document.querySelector('#validation-input');

function validInvalid(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}

function onInputBlur(event) {
  if (input.value.length === Number(input.getAttribute('data-length'))) {
    // input.classList.add('valid');
    // input.classList.remove('invalid');
    validInvalid('valid', 'invalid');
  } else {
    // input.classList.remove('valid');
    // input.classList.add('invalid');
    validInvalid('invalid', 'valid');
  }
}
input.addEventListener('blur', onInputBlur);
