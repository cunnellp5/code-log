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
  if (typeof string !== 'string') {
    return null
  }
  let counter = {};
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] <= 'z' && string[i] >= 'a') {
      if (counter[(string[i])]) {
        counter[string[i]]++;
      } else {
        counter[string[i]] = 1;
      }
    }
  }
  return counter
}

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 50; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
console.log(countLetters(makeid()));



function view (shit) {
  var str = "az";
  var n = str.charCodeAt(0);

  for (var i = str.charCodeAt(0); i < str.charCodeAt(1); i++) {

  }
  return i
}
console.log(view('hello'));
