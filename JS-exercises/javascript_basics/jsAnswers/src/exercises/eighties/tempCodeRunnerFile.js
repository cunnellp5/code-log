function swap(array) {
  let result = greater(array);
  return result;
}

function greater(array) {
  let core = array.map(el => el).slice(1, array.length - 1);
  core.unshift(array[array.length - 1]);
  core.push(array[0]);
  return core;
}

console.log(swap([1, 2, 3, 4])); // [4,2,3,1]  
console.log(swap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [10, 2, 3, 4, 5, 6, 7, 8, 9, 1]  
console.log(swap([0, 2, 1])); // [1,2,0]  
console.log(swap([3])); // [3]
