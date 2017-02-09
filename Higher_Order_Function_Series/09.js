// Description:
//
// You will be given an array of objects (associative arrays in PHP) representing
//  data about developers who have signed up to attend the next coding meetup that
//   you are organising.
//
// Your task is to return:
//
// true if developers from all of the following age groups have signed up: teens,
//  twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties,
//   centenarian (at least 100 years young).
// false otherwise.
//
// For example, given the following input array:

// your function should return true as there is at least one developer from each age group.
//
// Notes:
//
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.
var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 59, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

function isAgeDiverse(list) {
  var ageArr = list.map(function(element){
    return element.age
  })
  var newArr = [false,false,false,false,false,false,false,false,false,false]
  for (var i = 0; i < ageArr.length; i++) {
    if (ageArr[i] < 20 && ageArr[i] >= 0) {
      newArr[0] = true
    } else if (ageArr[i] < 30 && ageArr[i] >= 20) {
      newArr[1] = true
    } else if (ageArr[i] < 40 && ageArr[i] >= 30) {
      newArr[2] = true
    } else if (ageArr[i] < 50 && ageArr[i] >= 40) {
      newArr[3] = true
    } else if (ageArr[i] < 60 && ageArr[i] >= 50) {
      newArr[4] = true
    } else if (ageArr[i] < 70 && ageArr[i] >= 60) {
      newArr[5] = true
    } else if (ageArr[i] < 80 && ageArr[i] >= 70) {
      newArr[6] = true
    } else if (ageArr[i] < 90 && ageArr[i] >= 80) {
      newArr[7] = true
    } else if (ageArr[i] < 100 && ageArr[i] >= 90) {
      newArr[8] = true
    } else if (ageArr[i] < 200 && ageArr[i] >= 100) {
      newArr[9] = true
    }
  }
  // console.log(newArr)
  // let answer;
  // for (var i = 0; i < newArr.length; i++) {
  //   if (newArr[i] === true) {
  //     answer = true
  //   } else {
  //     answer = false;
  //   }
  // }
  // return answer
  return newArr.every(function(element){
    return element === true
  })
}

console.log(isAgeDiverse(list1));
