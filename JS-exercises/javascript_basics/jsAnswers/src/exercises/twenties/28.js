const question = `28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range`;
const blockcode =`<code>
function rangeOf(first, second) {
  let args = [first, second];
  return args.some((range) => range >= 50 && range <= 99)
}
console.log(rangeOf(33, 4)); // false
console.log(rangeOf(455, 95)); // true
console.log(rangeOf(50, 99)); // true
console.log(rangeOf(503, 929)); // false
console.log(rangeOf(73, 929)); // true
    </code>`;

function rangeOf(first, second) {
  let args = [first, second];
  return args.some((range) => range >= 50 && range <= 99)
}

export { question, blockcode }
