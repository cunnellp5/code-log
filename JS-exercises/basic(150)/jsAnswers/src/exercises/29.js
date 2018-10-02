const question = `29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.`;
const blockcode =`<code>
function rangeOfThree(first, second, third) {
  let args = [first, second, third];
  return args.some((range) => range >= 50 && range <= 99)
}
console.log(rangeOfThree(1, 22, 55)); // true
console.log(rangeOfThree(1, 22, 5)); // false
console.log(rangeOfThree(1, 242, 5)); // false
console.log(rangeOfThree(31, 242, 5)); // false
console.log(rangeOfThree(77, 242, 5)); // true
console.log(rangeOfThree(77, 99, 5)); // true
console.log(rangeOfThree(0, 99, 5)); // true
    </code>`;

function rangeOfThree(first, second, third) {
  let args = [first, second, third];
  return args.some((range) => range >= 50 && range <= 99)
}

export {question, blockcode}