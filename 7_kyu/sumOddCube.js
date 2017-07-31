// Find the sum of the odd numbers within an array, after cubing the initial
// integers. This function will return undefined (NULL in PHP) if any of the
// values aren't numbers.

function cubeOdd(arr) {
  var odd = arr.filter(function(element){
    return element % 2 !== 0
  })
  var adding = odd.reduce(function(prev, current){
    var cube = (current * current * current)
    if (typeof current != 'number' || typeof prev != 'number') {
      return undefined
    } else {
      return prev + cube
    }
  },0)
  return adding
}

console.log(cubeOdd([1,2,3,4])); // 28
console.log(cubeOdd([-3,-2,2,3])); // 0
console.log(cubeOdd(["a",12,9,"z",42])); // undefined
console.log(cubeOdd([16,6,"a",50,-10,7]));
