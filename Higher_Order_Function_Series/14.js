// You will be given an array of objects representing data about developers who
// have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an object which includes the count of food options
// selected by the developers on the meetup sign-up form..
//
// For example, given the following input array:
//
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian' },
];
//
// your function should return the following object (the order of properties does not matter):
//
// { vegetarian: 2, standard: 1, vegan: 1 }

function orderFood(list) {
  let veggy = array(list)
  let counter = objectify(veggy)
  return counter
}
function objectify (array) {
  let counter = {};
  for (var i = 0; i < array.length; i++) {
    counter[(array[i])] ? counter[(array[i])]++ : counter[(array[i])] = 1
  }
  return counter
}
function array (obj) {
  return obj.map((element) => {
    return element.meal
  });
}
console.log(orderFood(list1));
