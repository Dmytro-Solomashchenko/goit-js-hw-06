function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let boxSize = 30;

refs.createBtn.addEventListener('click', createBoxes);
const boxEl = document.createElement('div');

function createBoxes(amount) {
  const amountBoxes = refs.input.value;
  console.log(amountBoxes);
  for (let i = 0; i < amountBoxes; i += 1) {
    boxSize += 10;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    refs.boxes.append(boxEl);
  }
}
