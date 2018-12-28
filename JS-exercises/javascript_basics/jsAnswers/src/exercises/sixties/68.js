const question = `68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.`;
const blockcode =`<code>
function two_string(string, n) {
  let beg = string.substring(0, n);
  let end = string.substring(string.length - n);
  return beg + end;
}

console.log(two_string("JavaScript", 2)); // Japt
console.log(two_string("JavaScript", 3)); // Javipt
    </code>`;

function two_string(string, n) {
  let beg = string.substring(0, n);
  let end = string.substring(string.length - n);
  return beg + end;
}

export { question, blockcode }
