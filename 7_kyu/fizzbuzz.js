function fizzbuzz(n) {
  var answer = [];
  for (var i = 0; i < n.length; i++) {
    if (n[i] % 3 === 0) {
      answer.push('Fizz')
    } else if (n[i] % 5 === 0) {
      answer.push('Buzz')
    } else if (n[i] % 3 === 0 && n[i] % 5 === 0) {
      answer.push('FizzBuzz')
    } else {
      answer.push(n[i])
    }
  }
  return answer
}
console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10]));
