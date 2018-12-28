const question = `52. Write a JavaScript program to convert the letters of a given string in alphabetical order.`;
const blockcode =`<code>
function alphabet_Soup(string) {
  return string.split('').sort((a, b) => {
    return a.localeCompare(b)
  }).join('')
}

console.log(alphabet_Soup("Python")); // hnoPty
console.log(alphabet_Soup("Exercises")); // ceeEirssx
    </code>`;

function alphabet_Soup(string) {
  return string.split('').sort((a, b) => {
    return a.localeCompare(b)
  }).join('')
}

export { question, blockcode }
