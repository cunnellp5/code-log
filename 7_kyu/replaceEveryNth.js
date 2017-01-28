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
function replaceNth(text, n, oldValue, newValue) {
  var getLetters = text.split(''); // split into array
  var replacedLetters = []; // replaced all o's so far
  var counter = 0 // 4
  for (var i = 0; i < getLetters.length; i++) {
    if (getLetters[i] === oldValue) {
      counter ++
      if ((counter % n) === 0) {
        replacedLetters.push(getLetters[i])
      }
    }
    replacedLetters.push(getLetters[i])
  }
  var betterize = replacedLetters.join('')
  if (n < 0) {
    return text
  } else {

    var double = oldValue+oldValue
    return  betterize.replace( new RegExp( double, 'g' ), newValue );
  }
}
console.log(replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i'));


// function replaceNth(text, n, oldValue, newValue) {
//   var getWords = text.split(''); // split into array of words
//   var indexes = [];// index of every point in array
//   var count = 0; // counts how many oldvalues
//
//   for (var i = 0; i < getWords.length; i++) {
//     indexes.push(i)
//     if (getWords[i] === oldValue) {
//       count++
//     }
//   }
// return getWords
// }
// console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'));
