const question = `42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode. Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31`;
const blockcode =`<code>
function number_order(x, y, z) {
  if(x < y && y < z) {
    return 'Strict mode'
  } else {
    return 'Soft mode'
  }
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));

    </code>`;

function number_order(x, y, z) {
  if(x < y && y < z) {
    return 'Strict mode'
  } else {
    return 'Soft mode'
  }
}


export { question, blockcode }
