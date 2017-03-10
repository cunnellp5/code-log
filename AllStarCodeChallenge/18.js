// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #18
//
// Create a function called strCount() that accepts 2 string arguments
//  and returns an integer of the count of occurrences the 2nd argument
//   are found in the first.
//
// If no occurrences can be found, a count of 0 should be returned.
//
// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z') // => 0
// Note:
// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){  
 counter = 0;
 for (var i = 0; i < str.length; i++) {
   if (letter === str[i]) {
     counter++
   }
 }
return counter
}
