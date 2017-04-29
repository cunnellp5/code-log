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

function almostIncreasingSequence(sequence) {
  var check = sequence[0];
  var answer = [];
  var garbage = [];

  for (var i = 0; i < sequence.length; i++) {
    if (check < sequence[i]) {
      check = sequence[i]
      garbage.push(sequence[i])
    } else {
      answer.push(sequence[i])
    }
  }

  var compare = 0;
  for (var i = 0; i < answer.length; i++) {
    if (compare < answer[i]) {
      compare = answer[i]
    }
  }
  return compare == answer[answer.length-1] ? true : false;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
