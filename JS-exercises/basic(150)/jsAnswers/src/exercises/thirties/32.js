const question = `32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.`;
const blockcode =`<code>
function nearestToOneHundo(...numbers) {
  return numbers.reduce((prev, curr) => {
    if(checkHair(prev) === checkHair(curr)) return [prev, curr] + ' BOTH SAMEZ\'s';
    return checkHair(prev) < checkHair(curr) ? prev : curr;
  })
}

function checkHair(val) {
  return Math.abs(100 - val)
}

console.log(nearestToOneHundo(3, 5)); // 5
console.log(nearestToOneHundo(333, 15)); // 15
console.log(nearestToOneHundo(95, 102)); // 102
console.log(nearestToOneHundo(99, 100)); // 100
console.log(nearestToOneHundo(99, 99)); // 99,99 BOTH SAMEZ's
console.log(nearestToOneHundo(99, 101)); // 99,101 BOTH SAMEZ's

    </code>`;

function nearestToOneHundo(...numbers) {
  return numbers.reduce((prev, curr) => {
    if(checkHair(prev) === checkHair(curr)) return [prev, curr] + ' BOTH SAMEZ\'s';
    return checkHair(prev) < checkHair(curr) ? prev : curr;
  })
}

function checkHair(val) {
  return Math.abs(100 - val)
}

export { question, blockcode }
