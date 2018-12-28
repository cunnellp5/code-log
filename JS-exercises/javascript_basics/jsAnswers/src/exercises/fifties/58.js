const question = `58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.`;
const blockcode =`<code>
function newstring(string) {
  if(string.length < 3) return false;
  let lastThree = string.substring(string.length - 3);
  return lastThree.repeat(4)
}

console.log(newstring("Python 3.0")); // 3.03.03.03.0
console.log(newstring("JS")); // false
console.log(newstring("JavaScript")); // iptiptiptipt
    </code>`;

function newstring(string) {
  if(string.length < 3) return false;
  let lastThree = string.substring(string.length - 3);
  return lastThree.repeat(4)
}

export { question, blockcode }
