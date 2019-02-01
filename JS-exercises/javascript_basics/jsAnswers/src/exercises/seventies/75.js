


const question = `75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.`;
const blockcode =`<code>
function middle_elements(first, second) {
  let result = [];
  result.push(first[1])
  result.push(second[1])
  return result;
}

console.log(middle_elements([1, 2, 3], [1, 5, 6])); // [2,5]
console.log(middle_elements([3, 3, 3], [2, 8, 0])); // [3,8]
console.log(middle_elements([4, 2, 7], [2, 4, 5])); // [2,4]
</code>`;

function middle_elements(first, second) {
  let result = [];
  result.push(first[1])
  result.push(second[1])
  return result;
}

export { question, blockcode }
