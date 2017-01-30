// You were given a string of integer temperature values. Create a function lowest_temp(t)
//  and return the lowest value or None/null/Nothing if the string is empty.


function lowestTemp(t) {
  if (t == '') {
    return null
  } else {
    var emptyArr = [];
    var numbs = t.split(' ')
    for (var i = 0; i < numbs.length; i++) {
      emptyArr.push(Number(numbs[i]))
    }
      let sorted = emptyArr.sort((a,b) => {
        return a-b
      })
      return sorted[0]
  }
}
console.log(lowestTemp('-1 50 -4 20 22 -7 0 10 -8'));

// describe("Testing lowestTemp", function(){
//   it("Basic tests", function(){
//     Test.assertEquals(lowestTemp(''), null);
//     Test.assertEquals(lowestTemp('-1 50 -4 20 22 -7 0 10 -8'), -8);
//     Test.assertEquals(lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14'), -43);
//   });
// });



function lowestTemp(t) {
  if (t == '') {
    return null
  } else {
    var emptyArr = [];
    var numbs = t.split(' ')
    for (var i = 0; i < numbs.length; i++) {
      emptyArr.push(Number(numbs[i]))
    }
    return Math.min(...emptyArr);

  }
}
console.log(lowestTemp('-1 50 -4 20 22 -7 0 10 -8'));

// describe("Testing lowestTemp", function(){
