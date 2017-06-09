// // Write a function that takes 2 arrays (a and b) and a number n.  Each array
// // contains numbers.  Return true if the number n exists in either array.
//
// function contains (a, b, n) {
//   let oneArray = a.concat(b)
//   return oneArray.indexOf(n) !== -1
// }
// // console.log(contains([1,2,3],[1,3,6], 6));
//
// // Write a function that takes an array and returns an array where all of the
// // elements have been cubed.
//
// function cubed (array) {
//   // let result = [];
//   // for (var i = 0; i < array.length; i++) {
//   //   result.push(array[i]*array[i]*array[i])
//   // }
//   // return result
//   return array.map(element => element * element * element)
// }
//
//
//
//
// function percentage (a, b) {
//   return a/b * 100
// }
//
//
// function addOutside (array) {
//   // console.log(array.length/2);
//   let result = [];
//   for (var i = 0; i < (array.length/2 - 1); i++) {
//     for (var j = (array.length-1); j > (array.length/2 - 1); j--) {
//       result.push(array[i] + array[j])
//       i++
//     }
//   }
//   return result
// }
// // console.log(addOutside([1,2,3,4,4,3,2,1]));
//
//
// function name (string) {
//   let array = string.split(' ');
//   let obj = {}
//   obj.firstName = array[0]
//   obj.lastName = array[1]
//   return obj
// }
// // console.log(name('Peter Parker'));
//
//
// function fortyTwo (array) {
//   let check = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === 42) {
//       check.push(array[i])
//     } else {
//       return false
//     }
//   }
//   if (check) {
//     return true
//   }
// }
// // console.log(fortyTwo([42,4]));
//
//
// function sorting (array) {
//   return array[array.sort().length-2]
// }
// // console.log(sorting([6,4,3,2,5,8,7,9]));
//
//
// function miniRays (ray, n) {
//   var result = [];
//   var little = [];
//   for (var i = 0; i < ray.length; i++) {
//     result.push(ray[i])
//   }
//   return result
// }
// console.log(miniRays([1,2,3,4], 2));

// ****************************

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "
  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];
  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output);
// that Mike is a youngster
