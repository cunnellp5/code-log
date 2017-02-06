// You will be given an array of objects representing data about developers
// who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an array which includes the developer who is the oldest.
//  In case of a tie, include all same-age senior developers listed in the same
//  order as they appeared in the original input array.
//
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];


var list1 = [{"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
{"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"},
{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},
{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
{"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure"},
{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
{"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":89,"language":"Clojure"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},{"firstName":"Sofia","lastName":"I.","country":"Argentina","continent":"Americas","age":35,"language":"Java"},{"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"},{"firstName":"Aadya","lastName":"Y.","country":"India","continent":"Asia","age":29,"language":"PHP"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},{"firstName":"Agustín","lastName":"M.","country":"Chile","continent":"Americas","age":37,"language":"C"},{"firstName":"Emily","lastName":"N.","country":"Ireland","continent":"Europe","age":38,"language":"Ruby"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":30,"language":"JavaScript"},{"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"C"},{"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":89,"language":"C"},{"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"PHP"},{"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":19,"language":"C"},{"firstName":"Madison","lastName":"U.","country":"United States","continent":"Americas","age":32,"language":"Ruby"},{"firstName":"Malik","lastName":"J.","country":"Greenland","continent":"Europe","age":19,"language":"Python"},{"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Java"},{"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"Ruby"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Java"},{"firstName":"Jakub","lastName":"Z.","country":"Czech Republic","continent":"Europe","age":42,"language":"Java"},{"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},{"firstName":"Aya","lastName":"D.","country":"Libya","continent":"Africa","age":39,"language":"C"},{"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":29,"language":"PHP"},{"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"Python"},{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},{"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},{"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"},{"firstName":"Mohamed","lastName":"F.","country":"Morocco","continent":"Africa","age":40,"language":"Ruby"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},{"firstName":"Emilija","lastName":"S.","country":"Lithuania","continent":"Europe","age":19,"language":"Python"},{"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},{"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":31,"language":"Python"},{"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},{"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"},{"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"}]
// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

// function greetDevelopers(list) {
//   list.forEach(function(entry) {
//     entry.greeting = `Hi ${entry.firstName}, what do you like the most about ${entry.language}?`;
//   });
//   return list
// }
// console.log(greetDevelopers(list1));

// function findSenior(list) {
//   var sortMe = list.map(function(element){
//     return element.age
//   })
//   var answer = sortMe.sort(function(a, b) {
//     return b - a
//   })
//   if (answer[0] == answer[1]) {
//     return [answer[0], answer[1]]
//   } else {
//     return answer[0]
//   }
// }
// console.log(findSenior(list1));


function findSenior(list) {
  var orgy = {age: 0};
  var maxAge = 0

  list.forEach((obj)=>{
    if (obj.age > maxAge) {
      maxAge = obj.age
    }
  })

  return list.filter((singleFuck, fucksIndex, fuckArray)=>{
    if (singleFuck.age >= maxAge) {
      return singleFuck
    }
  })
}
console.log(findSenior(list1));
