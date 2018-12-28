const question = `55. Write a JavaScript program to check if a given string contains equal number of p's and t's present.`;
const blockcode =`<code>
function equal_pt(string) {
  let p = string.match(/p/g).length;
  let t = string.match(/t/g).length;
  return (p === t) ? true : false;
}

console.log(equal_pt("paatpss")); // false
console.log(equal_pt("paatps")); // false
    </code>`;

function equal_pt(string) {
  let p = string.match(/p/g).length;
  let t = string.match(/t/g).length;
  return (p === t) ? true : false;
}

export { question, blockcode }
