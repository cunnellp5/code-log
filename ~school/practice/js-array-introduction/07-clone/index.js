// Using slice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// create a clone of an Array

function clone (array) {
  var clone = array.slice();

  return clone
}

module.exports = clone
