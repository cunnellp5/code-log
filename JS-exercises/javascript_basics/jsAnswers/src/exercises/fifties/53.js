const question = `53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.`;
const blockcode =`<code>
function ab_Check(string) {
  let splitRay = string.split('');
  let indexB = splitRay.indexOf('b');
  let indexA = splitRay.indexOf('a');
  if(indexB - indexA === 4) {
    return true;
  } else {
    return false;
  }
}

function ab_CheckRegex(str) {
  return (/a...b/).test(str) || (/b...a/).test(str)
}

console.log(ab_CheckRegex("Chainsbreak")); // true
console.log(ab_CheckRegex("pane borrowed")); // true
console.log(ab_CheckRegex("abCheck")); // false
    </code>`;

function ab_Check(string) {
  let splitRay = string.split('');
  let indexB = splitRay.indexOf('b');
  let indexA = splitRay.indexOf('a');
  if(Math.abs(indexB - indexA === 4)) {
    return true;
  } else {
    return false;
  }
}

function ab_CheckRegex(str) {
  return (/a...b/).test(str) || (/b...a/).test(str)
}

export { question, blockcode }
