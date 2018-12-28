// Using the sort method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Sort an array by its 1's digdit

// [12, 1, 24, 21] => [1, 21, 12, 24]
// [31, 22, 13, 55] => [31, 22, 13, 55]
// [56, 9, 45, 34, 0] => [0, 34, 45, 56, 9]

function onesSort (array) {
  array.sort(function (a,b){
  return a % 10 - b % 10;
});
return array;
}

module.exports = onesSort
