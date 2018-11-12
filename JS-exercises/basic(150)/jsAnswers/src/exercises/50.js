const question = `50. Write a JavaScript program to capitalize the first letter of each word of a given string.`;
const blockcode =`<code>
function capitalizeFirstLetter(sentence) {
  return sentence.split(' ').map((el) => {
    if(el !== ' ') {
      return el.substring(0, 1).toUpperCase() + el.substring(1)
    }
  }).join(' ');
}

console.log(capitalizeFirstLetter("
  Write a JavaScript program to capitalize
  the first letter of each word
  of a given string.
"));
    </code>`;

function capitalizeFirstLetter(sentence) {
  return sentence.split(' ').map((el) => {
    if(el !== ' ') {
      return el.substring(0, 1).toUpperCase() + el.substring(1)
    }
  }).join(' ');
}

export { question, blockcode }
