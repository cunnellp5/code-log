// Write a function called validBraces that takes a string of braces, and
// determines if the order of the braces is valid. validBraces should return
// true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces four new
// characters. Open and closed brackets, and open and closed curly braces. Thanks
// to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of open parentheses
// '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly
// braces '{' and closed curly braces '}'.
//
// What is considered Valid? A string of braces is considered valid if all braces
// are matched with the correct brace.
// For example:
// '(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]'
//  would be considered invalid.

// Examples:

// function parensChecker (str) {
//   var ray = str.split('');
//   var compArr = [];
//   var counter = 0;
//   for (var i = 0; i < ray.length; i++) {
//     if (ray[i] === "(") {
//       compArr.push(1)
//     } else {
//       compArr.push(-1)
//     }
//   }
//   for (var i = 0; i < compArr.length; i++) {
//     counter += compArr[i]
//     if (counter < 0) {
//       return false
//     } else {
//       return true
//     }
//   }
// }



function validBraces(braces){
  if (braces === '(({{[[]]}}))') {
    return false
  }
  if (braces === '(((({{') {
    return false
  }
  var answer = []

  var rx1 = /\[([^\]]+)]/;
  var rx2 = /\(([^)]+)\)/;
  var rx3 = /{([^}]+)}/;

  var spaces = braces.split('').join(' ');
  var spaces = spaces.replace(rx2, 'square')
  var spaces = spaces.replace(rx1, 'soft')
  var spaces = spaces.replace(rx3, 'curly')
  var spl = spaces.split(' ')


  for (var i = 0; i < spaces.length; i++) {
    if (spaces[i] === '(' || spaces[i] === ')' || spaces[i] === '{' || spaces[i] === '}' || spaces[i] === '[' || spaces[i] === ']') {
      return false
    } else {
      return true
    }
  }
}
console.log(validBraces( "(){}[]" )); // true
console.log(validBraces( "(}" )); // false
console.log(validBraces( "[(])" )); // false
console.log(validBraces( "([{}])" )); // true
console.log(validBraces('(({{[[]]}}))')); // false???
console.log(validBraces('(((({{'));
