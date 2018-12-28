// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  var answer = [];
  var spaceSeeker = x.split(' ')
  for (var i = 0; i < spaceSeeker.length; i++) {
    if (spaceSeeker[i] !== '') {
      answer.push(spaceSeeker[i])
    }
  }
  return answer.join('')
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
