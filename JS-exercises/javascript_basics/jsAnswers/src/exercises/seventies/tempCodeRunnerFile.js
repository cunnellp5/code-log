
function twice3040(array) {
  let thirties = array.filter(el => el === 30).length
  let forties = array.filter(el => el === 40).length
  return thirties === 2 || forties === 2;
}

console.log(twice3040([30, 30])); // true
console.log(twice3040([40, 40])); // true
console.log(twice3040([40, 30])); // true
console.log(twice3040([20, 20])); // false
console.log(twice3040([30])); // false