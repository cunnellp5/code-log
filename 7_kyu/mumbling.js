function accum(s) {
  var answer = [];
  for (var i = 0; i < s.length; i++) {
    var mult = (i+1)

    while (mult >= 1) {
      if (mult--) {
        answer.push(s[i].toUpperCase())

      } else {
        answer.push(s[i].toLowerCase())
        mult--
      }
    }
  }
  return answer.join('')
}

console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"
