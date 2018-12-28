// Description:
//
// Write a function named euclidGcd() that takes two number arguments,
//  and gets the greatest common denominator of both numbers,
//   using euclids algorithm
//
// https://en.wikipedia.org/wiki/Euclidean_algorithm
//
// The Euclidean algorithm is based on the principle that the greatest common
// divisor of two numbers does not change if the larger number is replaced by
// its difference with the smaller number. For example, 21 is the GCD of 252
// and 105 (252 = 21 × 12 and 105 = 21 × 5), and the same number 21 is also
// the GCD of 105 and 147 = 252 − 105. Since this replacement reduces the
// larger of the two numbers, repeating this process gives successively smaller
// pairs of numbers until the two numbers become equal. When that occurs,
// they are the GCD of the original two numbers.
//1
// euclidGcd(7,24) // => 1
// euclidGcd(710,310) // => 10
// euclidGcd(-100,-90) // => -10;
// Note:
// Negative numbers are valid inputs

function euclidGcd (a, b) {
  var remainder = a % b
  var result = Math.floor(a/b)
  var step
  return remainder
}
console.log(euclidGcd(210,45));
