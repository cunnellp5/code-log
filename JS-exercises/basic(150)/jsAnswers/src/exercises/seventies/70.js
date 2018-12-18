const question = `70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3. `;
const blockcode =`<code>
function rotate_elements_left(ray) {
  const grabFirst = ray.shift();
  return ray.concat(grabFirst);
}

console.log(rotate_elements_left([3, 4, 5])); // [4,5,3]
console.log(rotate_elements_left([0, -1, 2])); // [-1,2,0]
console.log(rotate_elements_left([7, 6, 5])); // [6,5,7]
    </code>`;

function rotate_elements_left(ray) {
  const grabFirst = ray.shift();
  return ray.concat(grabFirst);
}

export { question, blockcode }