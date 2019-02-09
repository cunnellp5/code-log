const question = `80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.`;
const blockcode =`<code>
function swap(array) {
  let result = array.length < 4 ? array.reverse() : greater(array);
  return result;
}

function greater(array) {
  let core = array.map(el => el).slice(1, array.length - 1);
  core.unshift(array[array.length - 1]);
  core.push(array[0]);
  return core;
}

console.log(swap([1, 2, 3, 4])); // [4,2,3,1]  
console.log(swap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [10, 2, 3, 4, 5, 6, 7, 8, 9, 1]  
console.log(swap([0, 2, 1])); // [1,2,0]  
console.log(swap([3])); // [3]
    </code>`;

function swap(array) {
  let result = array.length < 4 ? array.reverse() : greater(array);
  return result;
}

function greater(array) {
  let core = array.map(el => el).slice(1, array.length - 1);
  core.unshift(array[array.length - 1]);
  core.push(array[0]);
  return core;
}

export { question, blockcode }