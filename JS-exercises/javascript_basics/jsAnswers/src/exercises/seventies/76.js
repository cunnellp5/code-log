const question = `76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.`;
const blockcode =`<code>
function started(array) {
  let result = [];
  result.push(array.shift())
  result.push(array.pop())
  return result
}

console.log(started([20, 20, 30])); // [20,30]
console.log(started([5, 2, 7, 8])); // [5,8]
console.log(started([17, 12, 34, 78])); // [17,78]
 </code>`;

function started(array) {
  let result = [];
  result.push(array.shift())
  result.push(array.pop())
  return result
}

export { question, blockcode }