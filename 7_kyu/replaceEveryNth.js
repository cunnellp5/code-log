// Replace every nth

// Write a method, that replaces every nth char oldValue with char newValue.
// Method:
//
// replaceNth(text, n, oldValue, newValue)
// Example:
//
// n:         2
// oldValue: 'a'
// newValue: 'o'
// "Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// Your method has to be case sensitive!
//
// As you can see in the example: The first changed is the 2nd 'a'.
// So the start is always at the nth suitable char and not at the first!
//
// If n is 0 or negative or if it is larger than the count of the oldValue,
// return the original text without a change.
//
// The text and the chars will never be null.


// function replaceNth(text, n, oldValue, newValue) {
//
//   //loop through text
//   //find all "oldValues" (like a letter)
//   //every "n" value swap out oldValue for the newValue
//   // if index of "oldValue" % n === 0
//
//   var getLetters = text.split('');
//   var emptyArr = [];
//   for (var i = 0; i < getLetters.length; i++) {
//     if (getLetters[i] === "a") {
//       emptyArr.push(getLetters[i])
//     }
//   }
//   return emptyArr
//
// }
//
// console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'));

// var count = 0
// if (getLetters[i] === 'a') {
//   count++
// }
// function replaceNth(text, n, oldValue, newValue) {
//   var getLetters = text.split('');
//   var replacedLetters = [];
//
//   for (var i = 0; i < getLetters.length; i++) {
//     aArray = [];
//     if (getLetters[i] === 'a') {
//       aArray.push(getLetters[i])
//     }
//     aArray.forEach(function(element, index){
//       return (index + 1)
//     })
//     console.log(aArray);
//     replacedLetters.push(getLetters[i].replace(oldValue, newValue))
//   }
//   return replacedLetters
// }
//
// console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'));



function replaceNth(text, n, oldValue, newValue) {
  var getLetters = text.split('');
  var replacedLetters = [];

  for (var i = 0; i < getLetters.length; i++) {
    if (getLetters[i] === oldValue && replacedLetters.length % 2 === 0) {

    }
    replacedLetters.push(getLetters[i].replace(oldValue, newValue))
  }
  return replacedLetters
}

console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'));
