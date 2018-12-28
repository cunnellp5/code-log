function sum (array) {
  return array.reduce(function(a, b){
    return a + b
  })
};
console.log(sum([5,6,7]));

function productAll (array) {
  var flatten = array.reduce(function(a,b){
    return a.concat(b)
  })
  return flatten.reduce(function(c,d){
    return c*d
  })
};
console.log(productAll([ [1, 2, 3], [4, 5], [6]]));

var matrix = [['Thundercats', '80s'],
['The Powerpuff Girls', '90s'],
['Sealab 2021', '00s']];

function objectify (array) {
  return array.reduce(function(key, value){
    key[value[0]] = value[1]
    return key;
  },{})
};
console.log(objectify(matrix));


var array  = [30, 48, 11, 5, 32];
function luckyNumbers (array) {
  var fuckyou = array.pop()
  return array.reduce(function(a,b){
    return a + b + ", "
  },"Your lucky numbers are: ") + "and " + fuckyou
};
console.log(luckyNumbers(array));

var result = 'Your lucky numbers are: 30, 48, 11, 5, and 32';






module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
