const question = `47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range). For example 40 presents in 400 and 4000`;
const blockcode =`<code>
function test_digit(x, y, n) {
  if(n < 40 || n > 10000) {
     return false;
  }
  if((n <= x && n >= y) || n >= x && n <= y) {
    return true;
  } else {
    return false;
  }
}

console.log(test_digit(40, 4000, 45)); // true
console.log(test_digit(80, 320, 79)); // false
console.log(test_digit(89, 4000, 30)); // false
    </code>`;

function test_digit(x, y, n) {
  if(n < 40 || n > 10000) {
     return false;
  }
  if((n <= x && n >= y) || n >= x && n <= y) {
    return true;
  } else {
    return false;
  }
}

export { question, blockcode }
