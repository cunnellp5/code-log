const question = `21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.`;
const blockcode =`<code>
function appendStringPy(string) {
  return string.substring(0, 2).toLowerCase() === 'py' ? string : 'Py' + string;
}

console.log(appendStringPy('somestring')) // Pysomestring
console.log(appendStringPy('44')) // Py44
console.log(appendStringPy('python')) // python
console.log(appendStringPy('PYthon')) // PYthon
console.log(appendStringPy('oneMoreString')) // PyoneMoreString
    </code>`;

function appendStringPy(string) {
  return string.substring(0, 2).toLowerCase() === 'py' ? string : 'Py' + string;
}

export { question, blockcode }
