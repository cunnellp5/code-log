data = require('./data');

function entryCalculator (entrants) {
  if (entrants === undefined) {
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
};

function schedule (dayName) {
  var answer = {};
  for (var day in data.hours) {
    let open = data.hours[day].open;
    let close = data.hours[day].close;
    if(open === 0 || close === 0) {
      answer[day] = 'CLOSED'
    } else {
      answer[day] = `Open from ${open}am until ${close > 12 ? close - 12 : close}pm`
    }
  }
  if(!dayName) {
    return answer
  } else {
    return {[dayName]: answer[dayName]}
  }
};

function animalCount (species) {
  var animalObj = {};
  for(var animal in data.animals) {
    let zoo = data.animals[animal];
    animalObj[zoo.name] = zoo.residents.length;
  }
  if(!species) {
    return animalObj
  } else {
    return animalObj[species]
  }
};

function animalMap (options) {
  var animalObj = {};
  for(var animal in data.animals) {
    let zoo = data.animals[animal];
    let names = zoo.residents.map(el => el.name);

    if(options.includeNames) {
      animalObj[zoo.location] = {[zoo.name]: names}
    }

    if(!animalObj[zoo.location]) {
      animalObj[zoo.location] = [zoo.name]
    } else {
      animalObj[zoo.location].push(zoo.name)
    }

  }
  return animalObj;
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
