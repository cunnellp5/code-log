// write a function that
//
// 1) adds the question property to each object in the input array where the
// developer has not provided the relevant details (marked with a null value).
// The value of the question property should be the following string:
//
// Hi, could you please provide your <property name>.
//
// 2) and returns only the developers with missing details:
//
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
//   question: 'Hi, could you please provide your language.' }
// ]
var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function askForMissingDetails(list) {
  list.forEach((element) => {
    for (var key in element) {
      if (element[key] == null) {
        element.question = `Hi, could you please provide your ${key}.`
      }
    }
  })
  return list.filter((el) => {
      return !!el.question
  })
}
console.log(askForMissingDetails(list1));
