const question = `45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.`;
const blockcode =`<code>
function twointegers(...int) {
  return int.reduce((pre, cur) => {
    if (pre === 15 || cur === 15) {
      return true;
    } else if (Math.abs(pre) + Math.abs(cur) === 15 || Math.abs(pre) - Math.abs(cur) === 15 ) {
      return true;
    } else {
      return false;
    }
  })
}

console.log(twointegers(15, 9)); // true
console.log(twointegers(25, 15)); // true
console.log(twointegers(7, 8)); // true
console.log(twointegers(25, 10)); // true
console.log(twointegers(5, 9)); // false
console.log(twointegers(7, 9)); // false
console.log(twointegers(9, 25)); // false
    </code>`;

function twointegers(...int) {
  return int.reduce((pre, cur) => {
    if (pre === 15 || cur === 15) {
      return true;
    } else if (Math.abs(pre) + Math.abs(cur) === 15 || Math.abs(pre) - Math.abs(cur) === 15 ) {
      return true;
    } else {
      return false;
    }
  })
}

export { question, blockcode }
