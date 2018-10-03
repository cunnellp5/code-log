const question = `26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.`;
const blockcode =`<code>
function frontNBack3(string) {
  let lastThree = string.substring(string.length - 3)
  return lastThree + string + lastThree;
}

console.log(frontNBack3('rapper')) // perrapperper
console.log(frontNBack3('peppermint')) // intpeppermintint
console.log(frontNBack3('poopy')) // opypoopyopy
    </code>`;

function frontNBack3(string) {
  let lastThree = string.substring(string.length - 3)
  return lastThree + string + lastThree;
}

export { question, blockcode }
