function swap() {
  let form = document.getElementsByTagName('form')[0];
  let farenheightButton = document.createElement('input');
  farenheightButton.innerText = 'Farenheight';
  form.appendChild(farenheightButton);
}