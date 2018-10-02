const question = `30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.`;
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