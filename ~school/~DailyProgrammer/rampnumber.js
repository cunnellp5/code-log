// # Ramp Numbers
// A ramp number is a number whose digits from left to right either
// only rise or
// stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.
//
// ## Output
// true if the input is a ramp number, false if it is not

function ramp (n) {
  n = n.toString().split('');
  for (var i = 0; i < n.length; i++) {
    if (n[i] < n[i+1]) {
      return true
    } else {
      return false
    }
  }
}

console.log(ramp(2039485));
console.log(ramp(1234));
