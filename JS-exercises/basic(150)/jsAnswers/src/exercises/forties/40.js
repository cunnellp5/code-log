const question = `40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.`;
const blockcode =`<code>
function sumDiff(one, two) {
  if(one === 8 || two === 8) {
    return true;
  } else if (one + two === 8) {
    return true;
  } else if (Math.abs(one - two) === 8) {
    return true;
  } else {
    return false
  }

}

console.log(sumDiff(7, 8)); // true
console.log(sumDiff(16, 8)); // true
console.log(sumDiff(24, 32)); // true
console.log(sumDiff(17, 18)); // false
    </code>`;

function sumDiff(one, two) {
  if(one === 8 || two === 8) {
    return true;
  } else if (one + two === 8) {
    return true;
  } else if (Math.abs(one - two) === 8) {
    return true;
  } else {
    return false
  }

}

export { question, blockcode }
