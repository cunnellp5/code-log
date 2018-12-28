const question = `60. Write a JavaScript program to create a new string without the first and last character of a given string.`;
const blockcode =`<code>
function without_first_end(string) {
  return string.substring(1, string.length - 1)
}

console.log(without_first_end('JavaScript')); // avaScrip
console.log(without_first_end('JS')); //
console.log(without_first_end('PHP')); // H
    </code>`;

function without_first_end(string) {
  return string.substring(1, string.length - 1)
}

export { question, blockcode }
