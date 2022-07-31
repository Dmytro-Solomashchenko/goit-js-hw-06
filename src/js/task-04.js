let counterValue = 0;
const refs = {
  increaseBtn: document.querySelector('[data-action="increment"]'),
  decreaseBtn: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector('#value'),
};

refs.increaseBtn.addEventListener('click', increment);

function increment() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}

refs.decreaseBtn.addEventListener('click', decrement);

function decrement() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}
