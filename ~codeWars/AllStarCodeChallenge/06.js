// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #6
//
// After watching the movie "Arrival", your friend Hannah is obsessed with
//  palindrome names. She wants a quick way to check if anyone she knows has one
//  of these unique names.
//
// Create a function, called isPalindrome, that checks if a string is the same
//  backwards as forwards, returning true or false accordingly.
//
// If a non-string value is given as an argument, the function should throw an error.

isPalindrome("hannah") // => true
isPalindrome("billy") // => false
isPalindrome(1) // => Error

function isPalindrome (str) {
  var forwards = [];
  var backwards = [];

  if (!isNaN(str)) {
    return err
  }

  for (var i = 0; i < str.length; i++) {
    forwards.push(str[i])
  }
  for (var i = str.length-1; i >= 0; i--) {
    backwards.push(str[i])
  }
  if (forwards.join('') === backwards.join('') && str != NaN) {
    return true
  } else {
    return false
  }
}
console.log(isPalindrome("hannah"));
console.log(isPalindrome(1));
