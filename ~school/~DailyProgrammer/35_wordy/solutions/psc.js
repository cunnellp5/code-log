module.exports = function wordy(question){
  // question1
  // var qmark = question.replace(/([?])+/,'')
  // var split = qmark.split(' ');
  // var filt = split.filter(function(element){
  //   return !isNaN(element)
  // })
  // if (split.includes('plus')) {
  //   return Number(filt[0]) + Number(filt[1])
  // } else if (split.includes('minus')) {
  //   return Number(filt[0]) - Number(filt[1])
  // } else if (split.includes('multiplied')) {
  //   return Number(filt[0]) * Number(filt[1])
  // } else if (split.includes('divided')) {
  //   return Number(filt[0]) / Number(filt[1])
  // }

  var calculate = {
    'plus': function (a,b){
      return a + b
    },
    'minus': function (a,b){
      return a - b
    },
    'multiplied': function (a,b){
      return a * b
    },
    'divided': function (a,b){
      return a / b
    }
  }

  question = question.match(/(-?\d+|divided|plus|minus|multiplied)/g)
  if (!question) {
    return 42
  }
  console.log(question);

  var answer = Number(question[0])

  for (var i = 1; i < question.length; i++) {
    if (question[i] in calculate) {
      answer = calculate[question[i]](answer, Number(question[i + 1]))
    }
  }
  return answer
}

// plus
// minus
// divided
// multiplied
