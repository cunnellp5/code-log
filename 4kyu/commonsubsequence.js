// Write a function called LCS that accepts two sequences, and returns the longest
//  subsequence common to the passed in sequences.
//
// Subsequence
//
// A subsequence is different from a substring. The terms of a subsequence need
//  not be consecutive terms of the original sequence.
//
// Example subsequence
//
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc"
//
// LCS examples
//
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// Notes
//
// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters (in JavaScript)
// All tests will only have a single longest common subsequence. Don't worry about
//  cases such as LCS( "1234", "3412" ), which would have two possible longest
//   common subsequences: "12" and "34".
// Note that the Haskell variant will use randomized testing, but any longest
//  common subsequence will be valid.
//
// Note that the OCaml variant is using generic lists instead of strings, and will
//  also have randomized tests (any longest common subsequence will be valid).
//
// Tips
//
// Wikipedia has an explanation of the two properties that can be used to solve
//  the problem:



// function LCS(x, y) {
//
//   var answer = '';
//   var incrementer = 0;
//
//   for (var i = 0; i < y.length; i++)
//     for (var j = incrementer; j < x.length; j++) {
//       if (y[i] === x[i]) {
//         answer += y[j]
//         i++
//         incrementer = j
//       }
//     }
//
//   return answer
// }

function LCS(x, y) {
  var answer = '';
  var inc = 0;

  for (var i = 0; i < y.length; i++) {
    for (var j = inc; j < x.length; j++) {

      if (y[i] === x[j]) {
        answer += x[j]
        i++
        inc = j
      }
    }
  }
  return answer
}

console.log(LCS('a', 'b')); // ''
console.log(LCS('abcdef', 'abc')); // 'abc'
console.log(LCS('abcdef', 'acf')); // 'acf'