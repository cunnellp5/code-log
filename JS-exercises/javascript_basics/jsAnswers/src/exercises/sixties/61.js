const question = `61. Write a JavaScript program to concatenate two strings except their first character.`;
const blockcode =`<code>
function concatenate(a, b) {
  return a.substring(1).concat(b.substring(1))
}

console.log(concatenate("PHP","JS")); // HPS
console.log(concatenate("A","B")); //
console.log(concatenate("AA","BB")); // AB
    </code>`;

function concatenate(a, b) {
  return a.substring(1).concat(b.substring(1))
}

export { question, blockcode }
