// You are given an array of values.
//
// Sum every number value in the array, and any nested arrays (to any depth).
//
// Ignore all other types of values.


function arraySum (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? newArr = newArr.concat(arraySum(arr[i])) : newArr.push(arr[i]);
  }
  var add = 0;
  for (var i = 0; i < newArr.length; i++) {
    if (typeof(newArr[i]) === 'number') {
      add += newArr[i]
    }
  }
  return add
}

console.log(arraySum([1, 2]));        // 3
console.log(arraySum([1, 2, 3]));     // 6
console.log(arraySum([1, 2, [1, 2]])); // 6
console.log(arraySum([ 1, 2, 'pig', 3 ])); // 6
