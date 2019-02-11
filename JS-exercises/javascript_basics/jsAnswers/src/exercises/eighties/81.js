const question = `81. Write a JavaScript program to add two digits of a given positive integer of length two.`;
const blockcode =`<code>
function add_two_digits(number) {
  return number.toString().split('').reduce((a,b)=>+a+(+b));
}

console.log(add_two_digits(25)) // 7
console.log(add_two_digits(50)) // 5
    </code>`;

function add_two_digits(number) {
  return number.toString().split('').reduce((a,b)=>+a+(+b));
}

export { question, blockcode }