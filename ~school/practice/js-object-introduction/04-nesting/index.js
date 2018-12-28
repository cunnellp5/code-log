// Create an object that has nested properties.
// name = name passed into function
// location
//   state = "Colorado"
//   city = "Denver"
// age = age passed into function

function createColoradian (name, age) {
  var stuff = {
    name: name,
    location: {
        state: "Colorado",
        city: "Denver"
    },
    age: age
  }
  return stuff
}

module.exports = createColoradian
