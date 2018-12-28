// Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : 
// Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

function dayTime() {
  let dayOfTheWeek = getWeekDay();
  let time = getTimeOfDay();
  return dayOfTheWeek + time;
}

function getTimeOfDay() {
  let hour = new Date().getHours();
     (hour > 12) ? hour - 12 : hour;
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let stamp = ((hour >= 12) ? 'PM' : 'AM');

  return `Current time is : ${hour} ${stamp} : ${min} : ${sec}`;
}

function getWeekDay() {
  let week = ['Sunday.', 'Monday.', 'Tuesday.', 'Wednesday.', 'Thursday.', 'Friday.', 'Saturday.'];
  let weekIndex = new Date().getDay();
  return `Today is : ${week[weekIndex]} \n`;
}

console.log(dayTime());
// at the time, yielded:
// Today is : Thursday. 
// Current time is : 8 AM : 34 : 58