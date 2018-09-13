var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');

function randomNumber() {
  // min = Math.ceil(1);
  // max = Math.floor(11);
  // return Math.floor(Math.random() * (max - min)) + min;
  return Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber);

function checkGuess() {
  if((randomNumber()) === parseInt(guessField.value)) {
    return document.getElementById('message').innerHTML = 'No fucking way, you got it!'
  } else {
    return document.getElementById('message').innerHTML = '<em>guess again loser</em>'
  }
}
console.log(checkGuess());

guessSubmit.addEventListener('click', checkGuess);

