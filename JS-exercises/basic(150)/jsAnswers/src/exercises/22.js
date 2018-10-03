const question = `22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.`;
const blockcode =`<code>
function removeLetter(string, index) {
  var ray = string.split('');
  var removed = ray.splice(index, 1);
  return ray.join('');
}

console.log(removeLetter('somestring', 4)) // sometring
console.log(removeLetter('44', 1)) // 4
    </code>`;

function removeLetter(string, index) {
  var ray = string.split('');
  var removed = ray.splice(index, 1);
  return ray.join('');
}

export { question, blockcode }
