
function multiply() {
  event.preventDefault();
  let firstNumber = parseInt(document.getElementById('first').value);
  let secondNumber = parseInt(document.getElementById('second').value);
  var result;
  if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
    result = firstNumber * secondNumber;
  } else {
    result = 'no letters, dummy';
  }
  return document.getElementById('result').innerHTML = result;
}

function divide() {
  event.preventDefault();
  let firstNumber = parseInt(document.getElementById('first').value);
  let secondNumber = parseInt(document.getElementById('second').value);
  let result;
  if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
    result = firstNumber / secondNumber;
  } else {
    result = 'no letters, dummy';
  }
  let setHTML = document.getElementById('result').innerHTML = result;
  return setHTML;
}

function erase() {
  event.preventDefault();
  document.getElementById('first').innerHTML = '';
  document.getElementById('second').innerHTML = '';
  let result = '** results cleared ** 🤧'
  return document.getElementById('result').innerHTML = result;
}