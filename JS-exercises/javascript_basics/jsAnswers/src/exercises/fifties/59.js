const question = `59. Write a JavaScript program to extract the first half of a string of even length.`;
const blockcode =`<code>
function first_half(string) {
  return (string.length % 2 === 0) ? string.substring(0, string.length / 2) : string;
}

console.log(first_half("Python")); // Pyt
console.log(first_half("JavaScript")); // JavaS
console.log(first_half("PHP")); // PHP
    </code>`;

function first_half(string) {
  return (string.length % 2 === 0) ? string.substring(0, string.length / 2) : string;
}

export { question, blockcode }
