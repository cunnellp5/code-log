const question = `82. Write a JavaScript to add two positive integers without carry.`;
const blockcode =`<code>
function add_two_int_without_carrying(a, b) {
  let result = [];
  let first = a.toString().split('');
  let second = b.toString().split('');
  
  first.forEach((el, idx) => {
    let DD = (+first[idx] + (+second[idx])) > 9;
    let addition = +first[idx] + (+second[idx]);
    result.push(DD ? addition.toString()[1] : addition);
  })

  return result.join('')
}

console.log(add_two_int_without_carrying(222, 911)); // 133
console.log(add_two_int_without_carrying(200, 900)); // 100
    </code>`;

function add_two_int_without_carrying(a, b) {
  let result = [];
  let first = a.toString().split('');
  let second = b.toString().split('');

  first.forEach((el, idx) => {
    let DD = (+first[idx] + (+second[idx])) > 9;
    let addition = +first[idx] + (+second[idx]);
    result.push(DD ? addition.toString()[1] : addition);
  })

  return result.join('')
}

export { question, blockcode }