// Story
//
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
//
// And because the local council has lost most of our tax money to a Nigerian email
//  scam there are no funds to fix the clock properly.
//
// Instead, they are asking for volunteer programmers to write some code that tell
//  the time by only looking at the remaining hour-hand!
//
// What a bunch of cheap-skates!
//
// Can you do it?
//
// Kata
//
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format.
//  Round down to the nearest minute.
//
// Examples
//
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
//
// 0 <= angle <= 360

// var whatTimeIsIt = function(angle) {
//   return "12:00";
// }

function whatTimeIsIt (angle) {
  var ratio = 360/12;
  var hour = Math.floor(angle / ratio);
  var min = Math.floor(((angle / ratio) - hour) * 60);
  if (angle === 0) {
    return '12:00'
  }
  return hour < 10 && min < 10
    ? `0${hour}:${min}0` : min < 10
    ? `${hour}:${min}0` : hour < 10
    ? `0${hour}:${min}` : `${hour}:${min}`
}

console.log(whatTimeIsIt(0));   //'12:00'
console.log(whatTimeIsIt(90));  //'03:00'
console.log(whatTimeIsIt(180)); //'06:00'
console.log(whatTimeIsIt(270)); //'09:00'
console.log(whatTimeIsIt(360)); //'12:00'
console.log(whatTimeIsIt(53));

// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
