const question = `48. Write a JavaScript program to reverse a given string.`;
const blockcode =`<code>
function reverseNew(string) {
  return string.split('').reverse().join('');
}

var reverseOld = (string) => {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result
}

var reverseOther = (string) => {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result.unshift(string[i]);
  }
  return result.join('')
}

var reverseWhile = (string) => {
  var result = "";
  var i = string.length
  while (i > 0) {
    result += string.substring(i - 1, i);
    i--;
  }
  return result
}

console.log(reverseWhile("w3resource")); // ecruoser3w
console.log(reverseWhile("www")); // www
console.log(reverseWhile("JavaScript")); // tpircSavaJ
    </code>`;

function reverseNew(string) {
  return string.split('').reverse().join('');
}

var reverseOld = (string) => {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result
}

var reverseOther = (string) => {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result.unshift(string[i]);
  }
  return result.join('')
}

var reverseWhile = (string) => {
  var result = "";
  var i = string.length
  while (i > 0) {
    result += string.substring(i - 1, i);
    i--;
  }
  return result
}

export { question, blockcode }
