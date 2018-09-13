var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');

function randomNumber() {
  min = Math.ceil(1);
  max = Math.floor(11);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber())

function checkGuess() {
  console.log(randomNumber());
  console.log(guessField.value);
  if((randomNumber()) === guessField.value) {
    return 'HooRAAAAAYYYY👻'
  } else {
    return 'guess again sukka'
  }
}
console.log(checkGuess());

guessSubmit.addEventListener('click', checkGuess);

