const question = `73. Write a JavaScript program to reverse the elements of a given array of integers length 3.`;
const blockcode =`<code>
function reverse3(ray) {
  if(ray.length === 3) {
    return ray.reverse()
  }
}

console.log(reverse3([5, 4, 3])); // [3,4,5]
console.log(reverse3([1, 0, -1])); // [-1,0,1]
console.log(reverse3([2, 3, 1])); // [1,3,2]
    </code>`;

function reverse3(ray) {
  if(ray.length === 3) {
    return ray.reverse()
  }
}

export { question, blockcode }
