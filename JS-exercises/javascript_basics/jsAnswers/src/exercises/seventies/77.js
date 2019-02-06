const question = `77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.`;
const blockcode =`<code>
function contins13(array) {
  return array.includes(1) || array.includes(3)
}

console.log(contins13([1, 5])); // true  
console.log(contins13([2, 3])); // true  
console.log(contins13([7, 5])); // false

    </code>`;

function contins13(array) {
  return array.includes(1) || array.includes(3)
}

export { question, blockcode }

