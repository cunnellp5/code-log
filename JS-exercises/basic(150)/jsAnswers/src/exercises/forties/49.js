const question = `49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.`;
const blockcode =`<code>
function replaceLetter(string) {
  var codePlusOne = string.split('').map((el) => el.charCodeAt() + 1);
  var charCoded = codePlusOne.map(el => String.fromCharCode(el)).join('');
  return charCoded;
}

console.log(replaceLetter("PYTHON")); // QZUIPO
console.log(replaceLetter("W3R")); // X4S
console.log(replaceLetter("php")); //qIq
    </code>`;

function replaceLetter(string) {
  var codePlusOne = string.split('').map((el) => el.charCodeAt() + 1);
  var charCoded = codePlusOne.map(el => String.fromCharCode(el)).join('');
  return charCoded;
}

export { question, blockcode }
