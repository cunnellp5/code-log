const question = `44. Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.`;
const blockcode =`<code>
function intChecker(...numbers) {
  return numbers.filter((el)=>el>20).reduce((pre,cur)=>(cur>pre||pre>cur)?true:false);
}

console.log(intChecker(23, 45, 10)); // true
console.log(intChecker(23, 23, 10)); // false
console.log(intChecker(21, 66, 75)); // true
    </code>`;

function intChecker(...numbers) {
  return numbers.filter((el)=>el>20).reduce((pre,cur)=>(cur>pre||pre>cur)?true:false);
}

export { question, blockcode }
