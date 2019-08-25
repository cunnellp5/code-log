const question = `87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.`;
const blockcode = `<code>
function array_checking(arr1, arr2) {
  let result
  if (arr1.length !== arr2.length) return;

  arr1.forEach(element => {
    arr2.forEach((el) => {
      result = (element === el);
    });
  });
  return result;
}

console.log(array_checking([10, 20, 30], [10, 20, 30])); true
console.log(array_checking([10, 20, 30], [30, 10, 20])); false
console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40])); true
    </code>`;

function array_checking(arr1, arr2) {
  let result
  if (arr1.length !== arr2.length) return;

  arr1.forEach(element => {
    arr2.forEach((el) => {
      result = (element === el);
    });
  });
  return result;
}



export { question, blockcode }

