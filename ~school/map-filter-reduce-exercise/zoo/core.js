data = require('./data');

function entryCalculator (entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  if (entrants.Adult == 0 && entrants.Child == 0 && entrants.Senior == 0) return 0;

  if (entrants.Adult > 0 || entrants.Child > 0 || entrants.Senior > 0) {
    return (entrants.Adult * data.prices.Adult + entrants.Child * data.prices.Child + entrants.Senior * data.prices.Senior);
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
    let result;

    if(options && options.includeNames) {
      if(options.sex) {
        let gender = zoo.residents.filter(el => {
          if(options.sex === el.sex) return el;
        }).map(el => el.name);
        result = {[zoo.name]: gender};
      } else {
        result = {[zoo.name]: names};
      }
    } else {
      result = zoo.name;
    }

    if(!animalObj[zoo.location]) {
      animalObj[zoo.location] = [result]
    } else {
      animalObj[zoo.location].push(result)
    }
  }
  return animalObj;
};

function animalPopularity (rating) {
  let animalObj = {};

  for (var animal in data.animals) {
    let zoo = data.animals[animal];
    let popular = zoo.popularity;
    let animalName = zoo.name;
    if(!animalObj[popular]) {
      animalObj[popular] = [animalName]
    } else {
      animalObj[popular].push(animalName)
    }
  }

  if(!rating) {
    return animalObj;
  } else {
    return animalObj[rating]
  }
};

function animalsByIds (ids) {
  if(!ids) return [];

  let newIds = ids;
  if(!Array.isArray(ids)) {
    newIds = Array.of(ids);
  }
  let result = [];
  for(var animal in data.animals) {
    let zoo = data.animals[animal];
    newIds.forEach((id) => {
      if(zoo.id === id){
        result.push(zoo);
      }
    })
  }
  return result
};

function animalByName (animalName) {
  if(!animalName) return {};
  let result
  for(var animal in data.animals) {
    let zoo = data.animals[animal];
    let residentsRay = zoo.residents;
    residentsRay.forEach(el => {
      el['species'] = zoo.name;
      if(animalName === el.name) {
        result = el;
      }
    })
  }
  return result; // { name: 'Clay', sex: 'male', age: 4, species: 'giraffes' }
};


function employeesByIds (ids) {
  if(!ids) return [];
  let newIds = ids;
  if(!Array.isArray(ids)) {
    newIds = Array.of(ids);
  }
  let employeeObj = {};
  for(var employee in data.employees) {
    let worker = data.employees[employee];
    employeeObj[worker.id] = worker;
  }
  let result = [];
  newIds.forEach((el) =>  {
    result.push(employeeObj[el])
  })
  return result
};

function employeeByName (employeeName) {
  if(!employeeName) return {};
  for(var employee in data.employees) {
    let worker = data.employees[employee]
    if(Object.values(worker).includes(employeeName)) {
      return worker
    }
  }
};

function managersForEmployee (idOrName) {
  let managerNamedObj = {}

  // below loops original obj and redefines managers array for next loop
  for (employee in data.employees){
    let worker = data.employees[employee];
    let managers = worker.managers

    managers.forEach(id => console.log(id))
  }

  // for(manager in managerNamedObj) {
  //   let worker = managerNamedObj[manager];

  //   if(idOrName === worker.id) {
  //     return worker // managers need ids replaced with the name
  //   }
  // }
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
