const refs = {
  fontSize: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.fontSize.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  console.log(event.currentTarget.value);
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
