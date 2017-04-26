// Write a function, which takes a non-negative integer (seconds) as input and
// returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  if (seconds < 10) {
    seconds = '00:00:0' + seconds;
  }
  if (seconds < 60 && seconds > 60) {
    seconds = '00:00:' + seconds;
  }
  if (seconds % 60 == 0) {
    
  }
  return seconds

}

console.log(humanReadable(0)); // '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5)); // '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60)); // '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399)); // '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999)); // '99:59:59', 'humanReadable(359999)');
