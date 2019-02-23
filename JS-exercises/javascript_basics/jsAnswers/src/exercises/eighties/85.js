const question = `85. Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.`;
const blockcode =`<code>
  function alternate_Sums(array) {
    let firstBin = array.filter((el, idx) => idx % 2 === 0).reduce((a,b) => a + b)
    let secondBin = array.filter((el, idx) => idx % 2 !== 0).reduce((a,b) => a + b)
    return [firstBin, secondBin]
  }

console.log(alternate_Sums([1, 2, 3, 4, 5, 6])) // [9,12]

    </code>`;

function alternate_Sums(array) {
  let firstBin = array.filter((el, idx) => idx % 2 === 0).reduce((a,b) => a + b)
  let secondBin = array.filter((el, idx) => idx % 2 !== 0).reduce((a,b) => a + b)
  return [firstBin, secondBin]
}

export { question, blockcode }