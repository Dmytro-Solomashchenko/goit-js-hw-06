const listEl = document.querySelectorAll('li.item');
console.log('Number of categories:', listEl.length);

listEl.forEach(element => {
  console.log('Category:', element.children[0].textContent);
  console.log('Elements:', element.children[1].children.length);
});
