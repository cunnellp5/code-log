
function multiply() {
  event.preventDefault();
  let firstNumber = document.getElementById('first').value;
  let secondNumber = document.getElementById('second').value;
  let result = firstNumber * secondNumber;

  return document.getElementById('result').innerHTML = result;
}

function divide() {
  event.preventDefault();
  let firstNumber = document.getElementById('first').value;
  let secondNumber = document.getElementById('second').value;
  let result = firstNumber / secondNumber;

  return document.getElementById('result').innerHTML = result;
}

function clear() {
  event.preventDefault();
  document.getElementById('first').innerHTML = '';
  document.getElementById('second').innerHTML = '';
}