// expression to select elements.
const selectElement = (s) => document.querySelector(s);
//click to open menu
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});
//click to close
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});
