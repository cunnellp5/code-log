const question = `34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.`;
const blockcode =`<code>

function betwixt4060(...numbers) {
  if(!numbers.every((el) => el >= 40 && el <= 60)) return false;
  return numbers.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
  });
}

console.log(betwixt4060(33, 40)) // false
console.log(betwixt4060(3, 40)) // false
console.log(betwixt4060(40, 60)) // 60
console.log(betwixt4060(60, 40)) // 60

    </code>`;

function betwixt4060(...numbers) {
  if(!numbers.every((el) => el >= 40 && el <= 60)) return false;
  return numbers.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
  });
}

export { question, blockcode }
