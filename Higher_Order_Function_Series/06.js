// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return either:
//
// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
// your function should return true.
//
// Notes:
//
// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.


// var emptyArr = [];
// for (var i = 0; i < list.length; i++) {
//   emptyArr.push(list[i].language)
// }
// if (emptyArr[0] === emptyArr[1] === emptyArr[2]) {
//   return true;
// } else {
//   return false;
// }
function isSameLanguage(list) {
  var answer =  list.map(function(poopy){
    return poopy.language
  })
  if (answer[0] === answer[1] && answer[1] === answer[2]) {
    return true
  } else {
    return false
  }
}
console.log(isSameLanguage(list1));
