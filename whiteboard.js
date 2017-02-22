// You are given a valid integer. Sum all of the digits of the number.
// If the number is still multiple digits: repeat.
// Keep repeating until you are left with a single digit.

function sumDigits(int){
  var value = [];
  var sum = 0;
  var split = int.toString().split('');
  var result = 0;
  for (var i = 0; i < split.length; i++) {
    value.push(split[i])
    sum += Number(split[i])
  }
  if (sum.toString().length === 1) {
    return sum
  } else {
    for (var i = 0; i < sum.toString().length; i++) {
      return result += Number(sum.toString()[i])
    }
  }
  // return result

}



function sumDigits(int){
  var splitIntoArray = int.toString().split('')
  var emptyArr = [];
  var sum = 0;
  var result = 0;

  for (var i = 0; i < splitIntoArray.length; i++) {
    emptyArr.push(splitIntoArray[i])
    sum += Number(splitIntoArray[i])
  }
  if (sum.toString().length === 1) {
    return sum
  } else {
    for (var i = 0; i < sum.toString().length; i++) {
       result += Number(sum.toString()[i])
    }
  }
  return result
}

console.log(sumDigits(369));
