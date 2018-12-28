const question = `57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.`;
const blockcode =`<code>
    COPY AND PASTE CODE FROM BELOW RIGHT HERE TO RENDER IN HTML
    </code>`;

function string_copies(string, multiple) {
  let result = ''
  if(multiple < 0) {
    return false
  } else {
    for (var i = 0; i < multiple; i++) {
      result += string;
    }
    return result;
  }  
}

console.log(string_copies("abc", 5)); // abcabcabcabcabc
console.log(string_copies("abc", 0)); // (nothing here)
console.log(string_copies("abc", -2)); // false


export { question, blockcode }
