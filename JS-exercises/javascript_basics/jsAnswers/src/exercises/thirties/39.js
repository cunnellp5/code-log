const question = `39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.`;
const blockcode =`<code>
function summation(one, two) {
  let result = one + two;
  return (result <= 80 && result >= 50) ? 65 : 80;
}

console.log(summation(30,20)); // 65
console.log(summation(90,80)); // 80
    </code>`;

function summation(one, two) {
  let result = one + two;
  return (result <= 80 && result >= 50) ? 65 : 80;
}

export { question, blockcode }
