// Write a function that takes an array of numbers and returns the highest number
//
// NOTE: Look for sample inputs / outputs like:
// [] => undefined
// [1] => 1
// [17,15,19] => 19

function highest (array) {
  return array.reduce((previous, current) => {
    return previous < current ? previous : current
  })
}
console.log(highest([17,15,19,1, 299, 300]));
