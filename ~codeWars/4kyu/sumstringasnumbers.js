// Given the string representations of two integers, return the string
//  representation of the sum of those integers.
//
// For example:
//
// sumStrings('1','2') // => '3'

function sumStrings(a,b){
  const lenA = a.split('').length;
  const lenB = b.split('').length;
  var answer = 0;

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      answer += Number(a[i] + b[j])
    }
  }

  return answer
}

console.log(sumStrings('1397639045', '923487029874072349720937820949'));
