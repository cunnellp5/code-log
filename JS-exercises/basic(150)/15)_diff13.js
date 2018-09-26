// 15. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference.


function diffWithThirteen(number) {
  return (number <= 13) ?  (13 - number) : (2 * (number - 13));
}



console.log(diffWithThirteen(4))
console.log(diffWithThirteen(8))
console.log(diffWithThirteen(12))
console.log(diffWithThirteen(16))
console.log(diffWithThirteen(13))