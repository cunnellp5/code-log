const question = `43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.`;
const blockcode =`<code>
function rightdigit(...numbers) {
  let lastDigitArray = numbers.map((el) => {
    var numberRay = el.toString().split('');
    var lastDig = +numberRay[numberRay.length -1];
    return lastDig;
  })
  return lastDigitArray.every(el => {
    return el === lastDigitArray[0];
  })
}

console.log(rightdigit(22,32,42)); // true
console.log(rightdigit(102,302,2)); // true
console.log(rightdigit(20,22,45)); // false
    </code>`;

function rightdigit(...numbers) {
  let lastDigitArray = numbers.map((el) => {
    var numberRay = el.toString().split('');
    var lastDig = +numberRay[numberRay.length -1];
    return lastDig;
  })
  return lastDigitArray.every(el => {
    return el === lastDigitArray[0];
  })
}

export { question, blockcode }
