
function alternate_Sums(array) {
  let firstBin = array
                .filter((el, idx) => idx % 2 === 0)
                .reduce((a,b) => a + b)
  let secondBin = array
                .filter((el, idx) => idx % 2 !== 0)
                .reduce((a,b) => a + b)
  return [firstBin, secondBin]
}

console.log(alternate_Sums([1, 2, 3, 4, 5, 6])) // [9,12]