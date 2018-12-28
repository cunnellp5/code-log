// Task
//
// Given a string str, find the shortest possible string which can be achieved by
//  adding characters to the end of initial string to make it a palindrome.
// Example
//
// For str = "abcdc", the output should be "abcdcba".
// Input/Output
//
// [input] string str
//
// A string consisting of lowercase latin letters.
//
// Constraints: 3 ≤ str.length ≤ 10.
// [output] a string

function buildPalindrome(str) {
  var ray = str.split('')
  var answer = [];

  for (var i = 0; i < ray.length; i++) {
    answer.push(ray[i])
  }

  return answer
}
console.log(buildPalindrome("abcdc"));
                           //abcdcba
