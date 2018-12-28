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
console.log(parensChecker(")("));
console.log(parensChecker("()(((())))"));
console.log(parensChecker("())))("));
