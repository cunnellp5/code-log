// All Star Code Challenge #17
//
// Create a function called findeYear() that takes two arguments: an integer,
//  representing a month of the year (0-11), and another integer, representing
//   a day of the week (0-6). The function returns and integer of the first year,
//    going from 2014 to 2050, where the first day of the given month also occurs
//     on the given day of the week.
//
// If no appropriate year can be found, return 0.
//
// //Finding year where first day in Dec. is a Tue.
// findYear(11,2) // => 2015
//
// //Does not exist
// findYear(4,55) // => 0
// Hint:
// new Date()
// Using a Date object can automatically figure out the day of the week for you

function findYear(month, dayOfWeek){
  var date = new Date()
  var empty = [];
  for (var i = 0; i < date.length; i++) {
    empty.push(date[i])
  }
  return empty
}
console.log(findYear(2,2));
