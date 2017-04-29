// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
  var sort = statues.sort(function(prev, current) {
    return prev - current
  })
  let originalLength = sort.length - 1
  let diff = sort[sort.length-1] - sort[0]
  return diff - originalLength
}

console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 3 becasue its missing 4, 5, 7
