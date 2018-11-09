const question = `41. Write a JavaScript program to Check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40`;
const blockcode =`<code>
function threes(x, y, z) {
  if(x === y && y === z) {
    return 30;
  } else if (x === y || y === z || z === x) {
    return 40;
  } else {
    return 20;
  }
}

console.log(threes(8, 8, 8)); // 30
console.log(threes(8, 8, 18)); // 40
console.log(threes(8, 7, 18)); // 20
    </code>`;

function threes(x, y, z) {
  if(x === y && y === z) {
    return 30;
  } else if (x === y || y === z || z === x) {
    return 40;
  } else {
    return 20;
  }
}

export { question, blockcode }
