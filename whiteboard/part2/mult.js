// Write a function that takes an array of numbers and returns an array containing
// those numbers multiplied by 2
//
// NOTE: Look for sample inputs / outputs like:
//
// [] => []
// [1,2,3] => [2,4,6]
//
// function mult (ray) {
//   return ray.map(element => element * 2)
// }

function mult (ray) {
  let byTwo = [];
  for (var i = 0; i < ray.length; i++) {
    byTwo.push(ray[i] * 2)
  }
  return byTwo
}
console.log(mult([1,2,3]));
