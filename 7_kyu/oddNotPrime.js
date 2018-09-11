// For "x", determine how many positive integers less than or equal to "x" are
// odd but not prime. Assume "x" is an integer between 1 and 10000.
//
// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime,
 // so the answer is 1
//
// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime,
 // so the answer is 2x


// divisible by one and itself
function oddNotPrime(n) {
  let arr = [];
  let notPrime = [];
  if(n === 1) return 1;
  for (var i = 0; i <= n; i++) {
    if(i & 1) {
      arr.push(i)
    }
  }
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], 'arri')
    if (arr[i] % i === 0) {
      console.log(arr[i])
    } else if (arr[i] !== 1) {

    }
  }
  return notPrime
}
console.log(oddNotPrime(10))


// function isPrime(num) {
//   for(var i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num !== 1;
// }
//
// console.log(isPrime(5))
