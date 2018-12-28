const question = `63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.`;
const blockcode =`<code>
function middle_three(string) {
  if(string.length >= 3 && string.length % 2 !== 0) {
    return string.substring(((string.length / 2) - 1), (string.length / 2) + 2)
  } else {
    return string;
  }
}

console.log(middle_three('abcdefg')); // cde
console.log(middle_three('HTML5')); // TML
console.log(middle_three('Python')); // Python
console.log(middle_three('PHP')); // PHP
console.log(middle_three('Exercises')); // rci
    </code>`;

function middle_three(string) {
  if(string.length >= 3 && string.length % 2 !== 0) {
    return string.substring(((string.length / 2) - 1), (string.length / 2) + 2)
  } else {
    return string;
  }
}

export { question, blockcode }
