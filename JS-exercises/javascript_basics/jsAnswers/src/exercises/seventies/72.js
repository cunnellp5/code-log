const question = `72. Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.`;
const blockcode =`<code>
    COPY AND PASTE CODE FROM BELOW RIGHT HERE TO RENDER IN HTML
    </code>`;

function first_last_same(ray) {
  return ray[0] === ray[ray.length - 1]
}

console.log(first_last_same([10, 20, 30])); // false
console.log(first_last_same([10, 20, 30, 10])); // true
console.log(first_last_same([20, 20, 20])); // true

export { question, blockcode }
