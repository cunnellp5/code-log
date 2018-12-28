const question = `56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.`;
const blockcode =`<code>
function result_array(a, b) {
  return Math.floor(a / b).toString().split('')
}

console.log(result_array(80,6)); // ['1','3']
    </code>`;

function result_array(a, b) {
  return Math.floor(a / b).toString().split('')
}

export { question, blockcode }
