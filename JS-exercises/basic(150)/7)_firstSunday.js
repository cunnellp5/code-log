// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
// ************************************ just first sunday
// function firstSunday(beginning, end) {
//   let array = [];

//   for (let i = beginning; i <= end; i++) {
//     var JanDay = new Date(`January 1, ${i}`).getDay();
//     array.push({ day: JanDay, year: i });
//   }

//   let firstSunday = array.find((el) => {
//     return el.day === 0;
//   })

//   return firstSunday.year
// }

// console.log(firstSunday(2014, 2050))
//  ****************************** all sundays below
function allSundays(beginning, end) {
  let array = [];

  for (let i = beginning; i <= end; i++) {
    var JanDay = new Date(`${i}`, 0, 1)
    if(JanDay.getDay() === 0) {
      array.push(`1st January is being a Sunday ${i}`);
    }
  }
  return array
}

console.log(allSundays(2014, 2050))
// console.log(new Date(2014, 0, 1))