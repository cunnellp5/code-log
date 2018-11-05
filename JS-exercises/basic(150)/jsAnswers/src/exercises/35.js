const question = `35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.`;
const blockcode =`<code>
function contains2to4instances(word, letter) {
  let ray = word.split('');
  let count = ray.filter((el) => el === letter).length;
  return (count >= 2 && count <= 4) ? true : false
}

console.log(contains2to4instances('Python', 'y')); // false
console.log(contains2to4instances('JavaScript', 'a')); // true 
console.log(contains2to4instances('Console', 'o')); // true
    </code>`;

function contains2to4instances(word, letter) {
  let ray = word.split('');
  let count = ray.filter((el) => el === letter).length;
  return (count >= 2 && count <= 4) ? true : false
}

console.log(contains2to4instances('Python', 'y')); // false
console.log(contains2to4instances('JavaScript', 'a')); // true 
console.log(contains2to4instances('Console', 'o')); // true

export { question, blockcode }
