// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #22
//
// Create a function called toTime() that takes an integer argument of seconds
// and converts the value into a string describing how many hours and minutes
// comprise that many seconds.
//
// Any remaining seconds left over are ignored.
//
// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"
//
// toTime(3600); // => '1 hour(s) and 0 minute(s)'
// toTime(3601); // => '1 hour(s) and 0 minute(s)'
// toTime(3500); // => '0 hour(s) and 58 minute(s)'
// toTime(323500); // => '89 hour(s) and 51 minute(s)'


function toTime(seconds) {
  floor = Math.floor(Math.floor(seconds/60)/60)
  hr = ((seconds / 60) / 60)
  min = Math.floor(((hr - floor) * 60))

  return `${floor} hour(s) and ${min} minute(s)`
}

console.log(toTime(3600)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(3601)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(3500)); // '0 hour(s) and 58 minute(s)'
console.log(toTime(323500)); // '89 hour(s) and 51 minute(s)'
console.log(toTime(0)); // '0 hour(s) and 0 minute(s)'
