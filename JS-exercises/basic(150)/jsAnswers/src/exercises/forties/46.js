const question = `46. Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.`;
const blockcode =`<code>
function valCheck(...int) {
  return int.filter(el => (el % 7 === 0 || el % 11 === 0)).length === 1 ? true : false;
}

console.log(valCheck(14, 21)); // false
console.log(valCheck(14, 20)); // true
console.log(valCheck(16, 20)); // false
    </code>`;

function valCheck(...int) {
  return int.filter(el => (el % 7 === 0 || el % 11 === 0)).length === 1 ? true : false;
}

export { question, blockcode }
