// Create a function that iterates over the numbers array
// and returns the sum of all of its values added together

function sum (numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

module.exports = sum
