// PRE-CHALLENGE QUESTION:
//
// For this challenge, we are interested in finding the credit card number whose
// digits sum to the largest number. If more than one has the same largest sum of
// digits, we want the last one in the list with that sum.
// Write a single function that takes one argument. That argument will be an array
//   of credit card numbers. Assume the array can have any number of credit card
//   numbers and each one is a string of digits and dashes. Your function should
//   return the credit card number that has the largest sum of digits.
//
// Here is a sample array of credit card numbers:
// ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']
//
// In the sample array above, the digits add up to 49, 81, 81, and 64 respectively.
//  Since there are two which have the same sum, the function should return the
//  last one with that sum, in this case '4252-278893-7978'

function creditCards (array) {
  var addMe = array.pop();
  var add = 0;
  var empty = [];
  for (var i = 0; i < addMe.length; i++) {
    if (addMe[i] != '-') {
      empty.push(addMe[i])
      add = add + parseInt(addMe[i])
    }
  }
  
}

console.log(creditCards(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'] ));
