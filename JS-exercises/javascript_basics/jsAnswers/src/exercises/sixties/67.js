const question = `67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.`;
const blockcode =`<code>
function nop(string) {
  let end = string.length - 1;
  let first = string.substring(0,1);
  let last = string.substring(end);

  if(first === 'P' && last === 'P') {
    return string.substring(1, end)
  } else if (first === 'P'){
    return string.substring(1)
  } else if (last === 'P'){
    return string.substring(0, end);
  } else {
    return string
  }
}
console.log(nop("PythonP")); // ython
console.log(nop("Python")); // ython
console.log(nop("JavaScript")); // JavaScript

    </code>`;

function nop(string) {
  let end = string.length - 1;
  let first = string.substring(0,1);
  let last = string.substring(end);

  if(first === 'P' && last === 'P') {
    return string.substring(1, end)
  } else if (first === 'P'){
    return string.substring(1)
  } else if (last === 'P'){
    return string.substring(0, end);
  } else {
    return string
  }
}

export { question, blockcode }