//find largest number in an array


// 1) heres the first way using good old accumulator
function largest (array) {
  let answer = 0;
  for (var i = 0; i < array.length; i++) {
    if (answer < array[i]) {
      answer = array[i]
    }
  }
  return answer
}

// 2) heres answer two with hgher order functions
function largest  (array) {
  return array.reduce(function(a,b){
    return Math.max(a,b)
  })
}

// 3) another way somehow?
function largest (array) {
  var sorted = array.sort(function(a,b){
    return a-b
  })
  return sorted[sorted.length-1]
}

// 4) inverted of above
function largest (array) {
  var sorted = array.sort(function(a,b){
    return b-a
  })
  return sorted[0]
}
console.log(largest([1,2,3,4,5,4,3,2,1]));
