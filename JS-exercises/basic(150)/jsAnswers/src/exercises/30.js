const question = `30. Write a JavaScript program to check if a string "Script"
presents at 5th (index 4) position in a given string, if "Script" presents in the
string return the string without "Script" otherwise return the original one.`;
const blockcode =`<code>
    finish me
    </code>`;

function scriptThing(string) {
  let split = string.split('');
  if(split.splice(4, 6).join('').toLowerCase() === 'script') {
    split.splice(4, 6);
    console.log(string)
    return split.join('');
  } else {
    return string
  }
}

console.log(scriptThing('javaScript')); // java
console.log(scriptThing('javScript')); // javScript
console.log(scriptThing('poop')); // poop
console.log(scriptThing('poopscripthair')); // poophair

export { question, blockcode }
