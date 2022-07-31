const input = document.querySelector('#validation-input');

function onInputBlur(event) {
  if (input.value.length === Number(input.getAttribute('data-length'))) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
input.addEventListener('blur', onInputBlur);
