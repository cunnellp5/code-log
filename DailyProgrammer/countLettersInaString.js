// # Count It
// Write a function that counts the letters in a string.
//
// ## Input
// A string.  e.g. "Hello World"
//
// ## Output
// The letters and how often they show up.  e.g. d:1 e:1 h:1 l:3 o:2 r:1 w:1
// NOTE: the function should not call `console.log()`
//
// ## Special
// * Case-insensitive.  So convert all letters to lowercase
// * Ignore whitespace
// * Ignore anything not a-z
//
// ## Challenge input:
// "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

function countLetters (string) {
  let counter = {};
  string = string.toLowerCase();
  // iterate over the chars of the string
  for (var i = 0; i < string.length; i++) {
    // check to see if a letter
    if (string[i] <= 'z' && string[i] >= 'a') {
      if (counter.hasOwnProperty(string[i])) {
        // increment counter for given char obj[char]++
        counter[string[i]]++;
      } else {
        counter[string[i]] = 1
      }
    }
  }
  // print out the char counts
  return counter
}
console.log(countLetters("Hello asdfaslfjafdshkasdlhjasffsd;flkasjhdladskfj;aWorld"));
