// Instructions
// Output
// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #20
//
// Create a function called addArrays() that combines two arrays of equal length,
 // summing each element of the first with the corresponding element in the second,
 //  returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.
//
// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
// Note:
// Expect array input to either contain numbers or strings only
// The function should also allow for concatenating string
//
// addArrays(["a"],["b"]) // => ["ab"]


function addArrays(array1, array2) {
  var answer = [];
  if (array1.length !== array2.length) {
    return error
  }
  while (array1.length > 0) {
    var one = array1.shift()
    var two = array2.shift()
    var result = one + two
    answer.push(result)
  }
    return answer
}
console.log(addArrays([1,2],[4,5,3]));
