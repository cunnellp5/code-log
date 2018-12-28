// Check to see if a string has the same amount of 'x's and 'o's. The method must
// return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:



function XO(str) {
  var result = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'o') {
      result[(str[i])] ? result[str[i]] ++ : result[str[i]] = 1
    }
  }
  return result.x === result.o ? true : false;
}


console.log(XO("ooxx"));// => true
console.log(XO("xooxx"));// => false
console.log(XO("ooxXm"));// => true
console.log(XO("zpzpzpp"));// => true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"));// => false
