// Write a function, which takes a non-negative integer (seconds) as input and
// returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  // counting variables
  var mins = 0;
  var hours = 0;
  var sec = 0;
  // mini functions
  var mm = seconds / 60
  var hr = mm / 60
  // defines each human readable variable
  while (seconds >= 60) {
    mins = mm
    seconds -= 60
    while (mins >= 60) {
      hours = hr
      mins -= 60
    }
  }
  if (seconds < 60) {
    sec = seconds
  }
  // prepends the zero for readabilitity
  var answer = [Math.trunc(hours), Math.trunc(mins), sec]
  if (answer[0] < 10) {
    answer[0] = '0' + answer[0]
  }
  if (answer[1] < 10) {
    answer[1] = '0' + answer[1]
  }
  if (answer [2] < 10) {
    answer[2] = '0' + answer[2]
  }
  // get duh answer
  return answer.join(':')
}

console.log(humanReadable(0)); // '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5)); // '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60)); // '00:01:00', 'humanReadable(60)');
console.log(humanReadable(120)); // '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399)); // '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999)); // '99:59:59', 'humanReadable(359999)');
