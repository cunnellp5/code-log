// You will be given a string (x) featuring a cat 'C' and a mouse 'm'.
// The rest of the string will be made up of '.'.
//
// You need to find out if the cat can catch the mouse from it's current
// position. The cat can jump three characters. So:
//
// C.....m returns 'Escaped!' <-- more than three characters between
//
// C...m returns 'Caught!' <-- as there are three characters between the two,
// the cat can jump.

function catMouse(x){
  var emptyArr = [];
  for (var i = 0; i < x.length; i++) {
    if (x.length > 5) {
      return "Escaped!"
    } else {
      return "Caught!"
    }
    emptyArr.push(x[i])
  }
  return emptyArr
}
console.log(catMouse("C...m"));
