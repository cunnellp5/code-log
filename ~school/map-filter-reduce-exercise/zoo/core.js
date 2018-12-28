data = require('./data');
// var prices = { Adult: 49.99, Senior: 24.99, Child: 20.99 }
// var entrants = { Adult: 2, Child: 3, Senior: 1 }
function entryCalculator (entrants) {
  if (entrants == undefined) {
    return 0
  }
  if (Object.keys(entrants).length === 0) {
    return 0
  }
  if (entrants.Adult == 0 && entrants.Child == 0 && entrants.Senior == 0) {
    return 0;
  }
  if (entrants.Adult > 0 || entrants.Child > 0 || entrants.Senior > 0) {
    return (entrants.Adult * data.prices.Adult + entrants.Child * data.prices.Child + entrants.Senior * data.prices.Senior)
  }
  // if (entrants == undefined) {
  //   return 0
  // }
  // if (Object.keys(entrants).length === 0) {
  //   return 0
  // }
  // if (entrants.Adult == 0 && entrants.Child == 0 && entrants.Senior == 0) {
  //   return 0
  // }
  // var result = []
  // var val = Object.values(entrants)
  // var price = Object.values(data.prices)
  //
  // console.log(val)
  //
  // for (var i = 0; i < val.length; i++) {
  //   for (var j = 0; j < price.length; j++) {
  //     result.push(val[i] * price[j])
  //     i++
  //   }
  // }
  // console.log(result)
  //
  // var answer = result.reduce(function(a,b) {
  //   return a + b
  // })
  // return answer

};

// hours: { 'Tuesday': { open: 8, close: 18 },
//          'Wednesday': { open: 8, close: 18 },
//          'Thursday': { open: 10, close: 20 },
//          'Friday': { open: 10, close: 20 },
//          'Saturday': { open: 8, close: 22 },
//          'Sunday': { open: 8, close: 20 },
//          'Monday': { open: 0, close: 0 } },

// 'Tuesday': 'Open from 8am until 6pm',
// 'Wednesday': 'Open from 8am until 6pm',
// 'Thursday': 'Open from 10am until 8pm',
// 'Friday': 'Open from 10am until 8pm',
// 'Saturday': 'Open from 8am until 10pm',
// 'Sunday': 'Open from 8am until 8pm',
// 'Monday': 'CLOSED'
// result[value] = value

function schedule (dayName) {
  answer = {}
  data.hours.forEach(function(element){
    if (answer[element]) {
      answer[element] += 1
    } else {
      answer[element] = 1
    }
  })
  return answer
    // data.hours[i].open > 0 ? result[value] = ("Open from " + data.hours[i] + "am, "): "CLOSED";
    // data.hours[i].close > 0 ? result[value] = ("until " + data.hours[i].close + "pm"): "CLOSED";
    console.log(answer);
  // console.log(data.hours);
};
//
// function countLanguages(list) {
  // answer = {}
  // list.forEach(function(element){
  //   if (answer[element.language]) {
  //     answer[element.language] += 1
  //   } else {
  //     answer[element.language] = 1
  //   }
  // })
  // return answer
// }

function animalCount (species) {
  // your code here
};

function animalMap (options) {
  // your code here
};

function animalPopularity (rating) {
  // your code here
};

function animalsByIds (ids) {
  // your code here
};

function animalByName (animalName) {
  // your code here
};

function employeesByIds (ids) {
  // your code here
};

function employeeByName (employeeName) {
  // your code here
};

function managersForEmployee (idOrName) {
  // your code here
};

function employeeCoverage (idOrName) {
  // your code here
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}
