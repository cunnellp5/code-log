// given a string of parens >> ()()()))))(((())))
// return true if each opening has a closing
// other wise return false

function parensChecker (str) {
  var ray = str.split('');
  var compArr = [];
  var counter = 0;
  for (var i = 0; i < ray.length; i++) {
    if (ray[i] === "(") {
      compArr.push(1)
    } else {
      compArr.push(-1)
    }
  }
  for (var i = 0; i < compArr.length; i++) {
    counter += compArr[i]
    if (counter < 0) {
      return false
    } else {
      return true
    }
  }
}





















function validParentheses (str) {
  var ray = str.split('');
  var emptyRay = [];
  var count = 0;

  var mapped = ray.map(function(element){
    if (element === "(") {
      emptyRay.push(1)
    } else if (element === ")") {
      emptyRay.push(-1)
    }
  })
  var summed = emptyRay.reduce(function(a,b){
    return a + b;
  })
  
  return summed
}
console.log(validParentheses("()"));
console.log(validParentheses("()(((())))"));
console.log(validParentheses("())))("));





function validParentheses (str) {
  var ray = str.split('');
  var emptyRay = [];
  var count = 0;
  for (var i = 0; i < ray.length; i++) {
    if (ray[i] === "(") {
      emptyRay.push(1)
    } else if (ray[i] === ")") {
      emptyRay.push(-1)
    }
  }
  for (var i = 0; i < emptyRay.length; i++) {
    count += emptyRay[i];
    if (count < 0) {
      return false
    }
  }
  if (count > 0) {
    return false
  } else {
    return true
  }

}
