const question = `74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.`;
const blockcode =`<code>
function all_max(ray) {
  let first = ray[0];
  let last = ray[ray.length - 1];
  let isGreater = first > last ? first : last;
  return ray.fill(isGreater)
}

console.log(all_max([20, 30, 40])); // [40,40,40]
console.log(all_max([-7, -9, 0])); // [0,0,0]
console.log(all_max([12, 10, 3])); // [12,12,12]
    </code>`;

function all_max(ray) {
  let first = ray[0];
  let last = ray[ray.length - 1];
  let isGreater = first > last ? first : last;
  return ray.fill(isGreater)
}

export { question, blockcode }
