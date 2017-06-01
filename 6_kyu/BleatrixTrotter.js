// Bleatrix Trotter the sheep has devised a strategy that helps her fall asleep
//  faster. First, she picks a number N. Then she starts naming N, 2 × N, 3 × N,
//   and so on.
//
// Whenever she names a number, she thinks about all of the digits in that number.
//  She keeps track of which digits (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9) she has seen
//   at least once so far as part of any number she has named. Once she has seen
//   each of the ten digits at least once, she will fall asleep.
//
// Bleatrix must start with N and must always name (i + 1) × N directly after i × N.
//
// For example, suppose that Bleatrix picks N = 1692. She would count as follows:
//
// N = 1692. Now she has seen the digits 1, 2, 6, and 9.
// 2N = 3384. Now she has seen the digits 1, 2, 3, 4, 6, 8, and 9.
// 3N = 5076. Now she has seen all ten digits, and falls asleep.
// The purpose of this kata is to return the last number Bleatrix Trotter sees
// before falling asleep.
//
// Input
//
// Will always be positive integer or zero
// Output
//
// The last number Bleatrix Trotter sees or "INSOMNIA" (-1 in Rust and C++) if she
//  will count forever

function count (Num) {

  for (var i = 1; i < 3; i++) {
    var current = 0
    var tracker = [];
    var result = Num.toString().split('')
    var mult = Num * i
    let split = mult.toString().split('')
    tracker.push(split)
    current = (split)
    i++

  }
  return current
}

console.log(count(1692));


// numberArray = Numbs.toString().split('');
// // build object of numbers seen
// let obj = objectBuilder(numberArray);
// // makes an array of numbers seen at least once
// let rayResult = rayBuild(obj);
// // sorts the array for user readability
// var sort = sorter(rayResult);

function rayBuild (obj) {
  var answer = [];
  for (var prop in obj) {
    if (`${obj[prop]}` >= 1) {
      answer.push(`${prop}`);
    }
  }
  return answer
}

function sorter (ray) {
  return ray.sort(function(a, b) {
    return a - b
  })
}

function objectBuilder (numberArray) {
  let counter = {};
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 9 && numberArray[i] >= 0) {
      counter[(numberArray[i])] ? counter[numberArray[i]]++ : counter[numberArray[i]] = 1
    }
  }
  return counter
}
