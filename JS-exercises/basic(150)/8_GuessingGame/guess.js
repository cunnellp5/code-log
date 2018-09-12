console.log('hookedup')

function randomNumber() {
  min = Math.ceil(1);
  max = Math.floor(11);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber())



function inputValue(event) {
  console.log(event)
  let input = document.getElementsByTagName('input').value;
  console.log(input)
  return input
}
console.log(inputValue());
