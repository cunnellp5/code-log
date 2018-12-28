// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.


function leapYear(year) {
  if(year % 4 != 0) {
    return false; 
  } else if (year % 100 != 0) {
    return true;
  } else if (year % 400 != 0) {
    return false;
  } else {
    return true;
  }
}

console.log(leapYear(2019))