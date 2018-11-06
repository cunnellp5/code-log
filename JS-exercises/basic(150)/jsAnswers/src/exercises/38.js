const question = `38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.`;
const blockcode =`<code>
function grades(mark, final) {
  return (!final.includes('true') && mark >= 89) ? true : (final.includes('true') && +mark >= 90) ? true : false;;
}

console.log(grades("78", " ")); // false
console.log(grades("89", "true ")); // false
console.log(grades("99", "true ")); // true
console.log(grades("89", " aafafaf")); // true
console.log(grades("90", " true")); // true
    </code>`;

function grades(mark, final) {
  return (!final.includes('true') && mark >= 89) ? true : (final.includes('true') && +mark >= 90) ? true : false;;
}

export { question, blockcode }
