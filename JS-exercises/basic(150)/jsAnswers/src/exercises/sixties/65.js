const question = `65. Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.`;
const blockcode =`<code>
function end_script(string) {
  if(string.length < 6) return;
  return string.endsWith('Script')
}

console.log(end_script("JavaScript")); // true
console.log(end_script("Java Script")); // true
console.log(end_script("Java Scripts")); // false
    </code>`;

function end_script(string) {
  if(string.length < 6) return;
  return string.endsWith('Script')
}

export { question, blockcode }
