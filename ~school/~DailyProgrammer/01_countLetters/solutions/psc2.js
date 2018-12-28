function count (str) {
  let counter = {};
  str = str.toLowerCase()
  for (var i = 0; i < str.length; i++) {
    if (str[i] <= 'z' && str[i] >= 'a') {
      if (counter.hasOwnProperty(str[i])) {
        counter[str[i]]++
      } else {
        counter[str[i]] = 1
      }
    }
  }
  return counter
}
console.log(count('Hello'));
