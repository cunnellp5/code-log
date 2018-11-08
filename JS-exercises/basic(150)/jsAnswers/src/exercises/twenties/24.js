const question = `24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.`;
const blockcode =`<code>
function firstLetterJam(string) {
  var ray = string.split('');
  var first = ray[0];

  ray.unshift(first);
  ray.push(first);
  return ray.join('');
}

console.log(firstLetterJam('somestring')) // ssomestrings
console.log(firstLetterJam('belly')) // bbellyb
    </code>`;

function firstLetterJam(string) {
  var ray = string.split('');
  var first = ray[0];
  ray.unshift(first);
  ray.push(first);
  return ray.join('');
}

export { question, blockcode }
