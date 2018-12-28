const question = `71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.`;
const blockcode =`<code>
function first_last_1(array) {
  if(array.length < 2) return false;

  return (array[0] === 1 || array[array.length-1] === 1) ? true : false;
}

console.log(first_last_1([1, 3, 5])); // true
console.log(first_last_1([1, 3, 5, 1])); // true
console.log(first_last_1([2, 4, 6])); // false
    </code>`;

function first_last_1(array) {
  if(array.length < 2) return false;

  return (array[0] === 1 || array[array.length-1] === 1) ? true : false;
}

export { question, blockcode }