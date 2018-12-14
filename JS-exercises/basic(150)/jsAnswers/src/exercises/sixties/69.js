const question = `69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.`;
const blockcode =`<code>
function sum_three(array) {
  return array.reduce((a,b) => a += b);
}

console.log(sum_three([10, 32, 20])); // 62
console.log(sum_three([5, 7, 9])); // 21
console.log(sum_three([0, 8, -11])); // -3
    </code>`;

function sum_three(array) {
  return array.reduce((a,b) => a += b);
}

export { question, blockcode }