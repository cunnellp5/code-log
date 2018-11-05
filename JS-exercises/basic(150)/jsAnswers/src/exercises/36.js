const question = `36. Write a JavaScript program to check if the last digit of the three given positive integers is same.`;
const blockcode =`<code>
    
function lastDigitsyo(...digits) {
  if (digits.find((el) => el < 0)) return false;

  let lastDigit = digits.map(el => {
    let ray = el.toString().split('');
    let lastNumber = ray[ray.length - 1];
    return lastNumber;
  });

  for (let i = 0; i < lastDigit.length; i++) {
    return (lastDigit[i] === lastDigit[i+1]) ? true : false
  }
}

console.log(lastDigitsyo(12,22,42)); // true
console.log(lastDigitsyo(1,2,4)); // false
console.log(lastDigitsyo(11,22,44)); // false

console.log(lastDigitsyo(20, 30, 400)); // true
console.log(lastDigitsyo(-20, 30, 400)); // false
console.log(lastDigitsyo(20, -30, 400)); // false
console.log(lastDigitsyo(20, 30, -400)); // false

    </code>`;

function lastDigitsyo(...digits) {
  if (digits.find((el) => el < 0)) return false;

  let lastDigit = digits.map(el => {
    let ray = el.toString().split('');
    let lastNumber = ray[ray.length - 1];
    return lastNumber;
  });

  for (let i = 0; i < lastDigit.length; i++) {
    return (lastDigit[i] === lastDigit[i+1]) ? true : false
  }
}

console.log(lastDigitsyo(12,22,42)); // true
console.log(lastDigitsyo(1,2,4)); // false
console.log(lastDigitsyo(11,22,44)); // false

console.log(lastDigitsyo(20, 30, 400)); // true
console.log(lastDigitsyo(-20, 30, 400)); // false
console.log(lastDigitsyo(20, -30, 400)); // false
console.log(lastDigitsyo(20, 30, -400)); // false


export { question, blockcode }
