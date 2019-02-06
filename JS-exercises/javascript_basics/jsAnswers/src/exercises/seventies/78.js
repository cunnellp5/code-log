const question = `78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.`;
const blockcode =`<code>
function is13(array) {
  return !(array.includes(1) || array.includes(3))
}

console.log(is13([7, 8])); // true
console.log(is13([3, 2])); // false
console.log(is13([0, 1])); // false
    </code>`;

function is13(array) {
  return !(array.includes(1) || array.includes(3))
}

export { question, blockcode }