// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return:
//
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
// your function should return true.
//
// Notes:
//
// The input array will always be valid and formatted as in the example above.


// function isRubyComing(list) {
//   var emptyArr = 0;
//
//   for (var i = 0; i < list.length; i++) {
//     if(list[i].language === "Ruby")
//         emptyArr++
//     }
//     if (emptyArr > 0) {
//       return true
//     } else {
//       return false
//     }
//     return emptyArr
//   }
// console.log(isRubyComing(list1));
//
//
//
//

function isRubyComing(list){
  list.forEach(function(entry){
    if (entry.langugage === 'Ruby') {
    }
    console.log(entry.language);
  })
  return list
}
console.log(isRubyComing(list1));

//
// function greetDevelopers(list) {
//   list.forEach(function(entry) {
//     entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`;
//   });
//   return list
// }
// console.log(greetDevelopers(list1));



methods: {
  grabIssues() {
    this.$http.get('http://localhost:3000/issues')
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.forEach(function(entry){
          if (entry.isActive === true) {
            const resultArray = [];
            for (let key in data) {
              console.log("FUUUUUCK");
              resultArray.push(data[key])
            }
            this.issues = resultArray
          }
          // console.log(entry.isActive);
        })
        // console.log(data)
      })
  }
}
