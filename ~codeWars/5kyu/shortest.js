// Coding 3min : Max Value
//
// Task:
//
// Give you a number array, calculate any two elements in the array(by + - * /), return maximum value.
// Example:
//
// sc([1,1]) should return 2     because 1 + 1 = 2
// sc([1,2]) should return 3     because 1 + 2 = 3
// sc([1,2,3]) should return 6   because 2 * 3 = 6
// sc([-1,2]) should return 3    because 2 - -1 = 3
// sc([1,0.5]) should return 2   because 1 / 0.5 = 2
// sc([1,0]) should return 1     because 1 + 0 = 1 ( n/0 is not allowed)
// sc([0.333,0.5]) should return 1.5015015015015014
//                 because 0.5 / 0.333 = 1.5015015015015014

function sc (array) {
  positiveNumbers = [];
  add = 0;
  multiply = 0;
  divide = 0;
  max = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      positiveNumbers.push((array[i] * (-1)))
    } else {
      positiveNumbers.push(array[i])
    }
  }
  var sortMe = positiveNumbers.sort(function(a,b) {
    return (a-b);
  })
  // for (var i = 0; i < sortMe.length; i++) {
  //   divide = (sortMe[i] / sortMe[i-1])
  //   add += sortMe[i]
  //   multiply *= (sortMe[i])
  //     max.push(divide)
  //     max.push(add)
  //     max.push(multiply)
  // }\
  while (sortMe > 0) {
    sou
  }
  var matrix = max.splice(1,max.length)
  var sort = matrix.sort(function(a,b){
    return a - b
  })
  return sort[sort.length-1]
}

console.log(sc([1,7,15,1,20,7,12,6,8,13,19,0.036,18,-12,-7,9,10,13]));
console.log(sc([1,2]));
console.log(sc([1,2,3]));
console.log(sc([-1,2]));
console.log(sc([1,0.5]));
console.log(sc([1,0]));
console.log(sc([0.333,0.5]));
