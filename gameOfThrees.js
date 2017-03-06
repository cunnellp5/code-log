function gameOfThrees(numb){
  var current = 0
  while (numb > 1) {
    if (numb % 3 === 0) {
      current = numb;
      numb = numb/3;
    } if (numb % 3 === 1) {
      current = numb;
      numb = numb - 1;
    }  if (numb % 3 === 2) {
      current = numb;
      numb = numb + 1;
    }
  }
  return current
};
console.log(gameOfThrees(100));


// function gameOfThrees(numb){
//   var current = 0;
//   if (numb === 1) {
//     return numb
//   } else if (numb % 3 === 0) {
//     return gameOfThrees (numb/3)
//   } else if (numb % 3 === 1) {
//     return gameOfThrees((numb-1)/3)
//   } else if (numb % 3 === 2) {
//     return gameOfThrees((numb+1)/3)
//   }
//   return numb
// }
// console.log(gameOfThrees(31337357));
