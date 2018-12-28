// # Anagram
//
// Write a program to test if a word is an anagram of another word.
//
// ## Input
//
// Two strings e.g. "pameesxl" and "examples".
//
// ## Output
//
// Boolean. True if the words are anagrams.
//
// ## Stretch
//
// The program can take a string and an array of words e.g. "examples" and ["pameesxl", "woamxapl", "emaplsic"].
// The output is an array of words that are anagrams from the list inputed.
//
// - a function that takes one argument that is a string
//      - this function will put all letters into an array
//      - i will sort the letters using unary code


function compare (string1, string2){
if (string1.length === string2.length) {
  var word1 = string1.split("").sort().join("");
  var word2 = string2.split("").sort().join("");
  if (word1 === word2) {
    return true;
  }
} else {
  return false;
}
}
console.log(compare('examples','pameesxl'));
