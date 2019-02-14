const question = `83. Write a JavaScript to find the longest string from an given array of strings.`;
const blockcode =`<code>
function longest_string(array) {
  return array.reduce((a,b) => a.length > b.length ? a : b);
}

console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa','aaaa'])) // ["aaaaa"]
    </code>`;

function longest_string(array) {
  return array.reduce((a,b) => a.length > b.length ? a : b);
}


export { question, blockcode }