// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;
//
// There is no one element in this array that can be removed in order to get a
// strictly increasing sequence.
//
// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.
//
// You can remove 3 from the array to get the strictly increasing sequence [1, 2].
//  Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// function almostIncreasingSequence(sequence) {
//   var check = sequence[0];
//   var answer = [];
//   var garbage = [];
//   // pluck one of the larger numbers out
//   for (var i = 0; i < sequence.length; i++) {
//     check < sequence[i] ? check = sequence[i] / garbage.push(check) : answer.push(sequence[i]);
//   }
//   // now look for increasing sequence
//   // var checker = 0;
//   // var result = '';
//   // for (var i = 0; i < answer.length; i++) {
//   //   if (answer[i] > checker) {
//   //     checker = answer[i]
//   //     result = true
//   //   } else if (answer[i] = checker) {
//   //     result = false
//   //     return result
//   //   } else {
//   //     result = false
//   //     return result
//   //   }
//   // }
//   return answer
// }

function almostIncreasingSequence(sequence) {
  var check = sequence[0]
  var result = '';
  var ray = [];

  for (var i = 0; i < sequence.length; i++) {
    
  }
  return sequence
}

console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5])); // true
console.log(almostIncreasingSequence([1, 2, 1, 2])); // falsse 1,1,2
console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([5,6,7,8,9]));
