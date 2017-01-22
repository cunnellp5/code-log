// Create a Function that takes one parameter and returns its square root
// correct to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.
//
// Trailing zeros should be left out. For example
//
// squareRoot(41) // => 6.245;
// rather than
//
// squareRoot(41) // => 6.24500;


// function squareRoot(x) {
//   return x = x*x // x^2 >> x^1/2
// }
// console.log(squareRoot(25));





function squareRoot(num) {
  var lastGuess, guess = num / 3;

  do {
    lastGuess = guess;
    guess = (num / guess + guess) / 2;
  } while(Math.abs(lastGuess - guess) > 5e-15);


  return parseFloat(guess.toFixed(5))
};

console.log(squareRoot(21));


// Test.assertEquals(squareRoot(81), 9);
// Test.assertEquals(squareRoot(15), 3.87298);
// Test.assertEquals(squareRoot(21), 4.58258);
