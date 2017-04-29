// Your job is to add a method 'sum' to all array objects, which sums all the
// numbers in it. You should return 0 if the array is empty.

function sum (arr) {
  return arr.reduce((a,b) => a+b)
}

console.log(sum([1,2,3,4]));
