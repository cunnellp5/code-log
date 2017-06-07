// Write a function that takes an array and a value.  Return the index of the
// given value in the array, without using JS’s built-in `indexOf` method
//
// NOTE: Look for sample inputs / outputs like:
//
// ([], “a”) => -1
// ([17,18,19], 18) => 1
// ([“a”, “b”, “c”], “c”) => 2

function index (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i
    }
  }
}
console.log(index([1,2,3,4,5,6], 3));
