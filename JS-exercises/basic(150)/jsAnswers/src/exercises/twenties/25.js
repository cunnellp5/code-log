const question = `25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.`;
const blockcode =`<code>
function multOfThreeOrSeven(number) {
  return (number % 3 === 0 || number % 7 === 0);
}

console.log(multOfThreeOrSeven(6)); // true
console.log(multOfThreeOrSeven(7)); // true
console.log(multOfThreeOrSeven(4)); // false
    </code>`;

function multOfThreeOrSeven(number) {
  return (number % 3 === 0 || number % 7 === 0);
}

export { question, blockcode }
