// Write a function that takes an array of numbers and a value and returns an
// array containing only the numbers greater than the given value
//
// NOTE: Look for sample inputs / outputs like:
//
// ([], 10) => []
// ([17,18,19], 17) => [18,19]


function filt (ray, val) {
  return ray.filter(function(element){
    return element > val
  })
}
console.log(filt([1,2,3,4,5,6,7], 4));
