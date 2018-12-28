// PUZZLE #1. SUM
//
// Assignment:
//
// Write a function named sum which performs addition in the way shown below
//
// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0
// NOTE: Pay attention that last brackets are left empty to indicate end of
//  operations


// function sum (x) {
//   return function (y) {
//     return function (z){
//       if (z === undefined) {
//         z = 0
//       }
//       return x + y + z;
//     };
//   };
// }

function sum(x) {
  return function(y) {
    return function(z) {
      console.log(sum);
      var array = [x,y,z]
      var answer = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
          array[i] = 0
        }
        answer += array[i]
      }
      return answer
    };
  };
}

console.log(sum(3)()());
