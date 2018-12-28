function countLetters (string) {
  var counter = {};
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] <= 'z' && string[i] >= 'a') {
      if (counter.hasOwnProperty(string[i])) {
        counter[string[i]] ++;
      } else {
        counter[string[i]] = 1;
      }
    }
  }
  return counter
}

console.log(countLetters("Hello World"));
