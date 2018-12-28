// To complete this Kata you need to make a function multiplyAll/multiply_all
// which takes an array of integers as an argument. This function must return
// another function, which takes a single integer as an argument and returns a
//  new array.
//
// The returned array should consist of each of the elements from the first array
//  multiplied by the integer.
//
// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

// function multiplyAll (array) {
//   function multiple (mult) {
//     var answer = [];
//     for (var i = 0; i < array.length; i++) {
//       answer.push(array[i] * mult)
//     }
//     return answer
//   }
//   return multiple
// }



// second solution
function multiplyAll (array) {
  function multiple (mult) {
    return array.map((element) => element * mult )
  }
  return multiple
}

console.log(multiplyAll([1,2,3])(2));
