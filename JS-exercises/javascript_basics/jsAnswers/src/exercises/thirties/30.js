const question = `30. Write a JavaScript program to check if a string "Script"
presents at 5th (index 4) position in a given string, if "Script" presents in the
string return the string without "Script" otherwise return the original one.`;
const blockcode =`<code>
function scriptThing(string) {
  let split = string.split('');
  let script = split.splice(4, 6).join('').toLowerCase();
  if(script === 'script') {
    return split.join('');
  } else {
    return string
  }
}

console.log(scriptThing('javaScript')); // java
console.log(scriptThing('javScript')); // javScript
console.log(scriptThing('poop')); // poop
console.log(scriptThing('poopscripthair')); // poophair
    </code>`;

function scriptThing(string) {
  let split = string.split('');
  let script = split.splice(4, 6).join('').toLowerCase();
  if(script === 'script') {
    return split.join('');
  } else {
    return string
  }
}

export { question, blockcode }
