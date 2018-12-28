

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// function getEvenNumbers(numbersArray){
//   return numbersArray.filter(function(element){
//     return element % 2 === 0
//   })
// }
// refactor
// var numbersArray = [2,4,5,6,7]
// var getEvenNumbers = numbersArray.filter(element => element % 2 == 0)

// another refactor for codewars
function getEvenNumbers(numbersArray){
  return numbersArray.filter(element => element % 2 === 0)
}
console.log(getEvenNumbers([2,4,5,6,7]));
