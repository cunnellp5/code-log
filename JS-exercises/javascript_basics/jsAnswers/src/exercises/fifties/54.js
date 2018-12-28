const question = `54. Write a JavaScript program to count the number of vowels in a given string.`;
const blockcode =`<code>
function vowel_Count(string) {
  return string.match(/[aeiou]/g).length;
}

console.log(vowel_Count("Python")); // 1
console.log(vowel_Count("w3resource.com")); // 5
    </code>`;

function vowel_Count(string) {
  return string.match(/[aeiou]/g).length;
}

export { question, blockcode }
