// Write a function generateIntegers that accepts a single argument
// n and generates an array containing the integers from 0 to n inclusive.
// For example, generateIntegers(3) should return [0, 1, 2, 3].
// n can be any integer greater than or equal to 0.

function generateIntegers(n) {
  var emptyArr = [];
  for (var i = 0; i <= n; i++) {
    emptyArr.push(i);
  }
  return emptyArr
}

console.log(generateIntegers(3)); // [0,1,2,3]
