const question = `18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.`;
const blockcode =`<code>
  function fiftyChecker(first, second) {
    return (first === 50 || second === 50 || first + second === 50) ? true : false;
  }

  console.log(fiftyChecker(9, 3)) // false
  console.log(fiftyChecker(50, 23)) // true
  console.log(fiftyChecker(25, 25)) // true
  console.log(fiftyChecker(40, 10)) // true
  console.log(fiftyChecker(20, 50)) // true
  console.log(fiftyChecker(320, 540)) // false
    </code>`;

function fiftyChecker(first, second) {
  return (first === 50 || second === 50 || first + second === 50) ? true : false;
}

export { question, blockcode }
