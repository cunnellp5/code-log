// Write a function that takes an array of numbers and returns the sum of those numbers
//
// NOTE: Look for sample inputs / outputs like:
//
// [] => 0
// [1] => 1
// [1, 7] => 8

function sum (array) {
  return array.reduce((a,b) => a + b)
}
console.log(sum([1,2,3,4]));
