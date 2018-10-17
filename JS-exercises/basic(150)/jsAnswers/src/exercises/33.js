const question = `33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.`;
const blockcode =`<code>

FIRST ONE:
function rangerWillRobinson(...numbers) {
  ray = [];
  numbers.forEach((el) => {
    if((el >= 40 && el <= 60) || (el <= 100 && el >= 70)) {
      ray.push(true);
    } else {
      ray.push(false);
    }
  })
  return ray.includes(false) ? false : true;
}

SECOND ONE:
function rangerWillRobinson(...numbers) {
  return numbers.every((el) => {
    return (el >= 40 && el <= 60) || (el <= 100 && el >= 70);
  });
}

console.log(rangerWillRobinson(44, 7)); // false
console.log(rangerWillRobinson(44, 70)); // true
console.log(rangerWillRobinson(60, 100)); // true
console.log(rangerWillRobinson(40, 41)); // true
console.log(rangerWillRobinson(40, 111)); // false

    </code>`;

function rangerWillRobinson1(...numbers) {
  ray = [];
  numbers.forEach((el) => {
    if((el >= 40 && el <= 60) || (el <= 100 && el >= 70)) {
      ray.push(true);
    } else {
      ray.push(false);
    }
  })
  return ray.includes(false) ? false : true;
}

function rangerWillRobinson(...numbers) {
  return numbers.every((el) => {
    return (el >= 40 && el <= 60) || (el <= 100 && el >= 70);
  });
}

export { question, blockcode }
