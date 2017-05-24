// Your task is to write function findSum.
//
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
//
// For example:
//
// findSum(5) should return 8 (3 + 5)
//
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let multiples = [];
  for (var i = 0; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((prev, curr) => prev + curr)
}

console.log(findSum(5)); //, 8);
console.log(findSum(10)); //, 33);
