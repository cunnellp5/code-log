const question = `27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.`;
const blockcode =`<code>
function checkJavaString(string) {
  let java = string.substring(0,4).toLowerCase();
  return java === 'java' ? true : false;
}

console.log(checkJavaString('java Chocolate Chip')); // true
console.log(checkJavaString('Jovial')); // false
console.log(checkJavaString('javaScript')); // true
    </code>`;

function checkJavaString(string) {
  let java = string.substring(0,4).toLowerCase();
  return java === 'java' ? true : false;
}

export { question, blockcode }
