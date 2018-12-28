// You've just discovered a square (NxN) field and you notice a warning sign.
//  The sign states that there's a single bomb in the 2D grid-like field in front
//   of you.
//
// Write a function mineLocation that accepts a 2D array, and returns the location
//  of the mine. The mine is represented as the integer 1 in the 2D array. Areas in
//  the 2D array that are not the mine will be represented as 0s.
//
// The location returned should be an array where the first element is the row index,
//  and the second element is the column index of the bomb location (both should be 0 based).
//   All 2D arrays passed into your function will be square (NxN), and there will
//    only be one mine in the array.
//
// Examples:

function mineLocation(field){
  var index = 0;
  var answer = [];
  for (var i = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      answer.push(field[i][j])
    }
  }
  return answer
}

console.log(mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ));
console.log(mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ));
console.log(mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ));
