const question = `37. Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.`;
const blockcode =`<code>
function newStringOThree(string) {
  if(string.length < 3) return string.toUpperCase();
  return string.split('').splice(0, 3).join('').toLowerCase() + string.substring(3);
}

console.log(newStringOThree('HELLO')); // helLO
console.log(newStringOThree('ah')); // AH
console.log(newStringOThree("Python")); // python
console.log(newStringOThree("Py")); // PY
console.log(newStringOThree("JAVAScript")); // javAScript
    </code>`;

function newStringOThree(string) {
  if(string.length < 3) return string.toUpperCase();
  return string.split('').splice(0, 3).join('').toLowerCase() + string.substring(3);
}

export { question, blockcode }
