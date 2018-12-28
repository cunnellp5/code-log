// Take the object passed into the function and append
// the property and value also passed in to the object.

function attachPropertyToObject (objectToModify, propertyName, value) {
  return objectToModify[propertyName] = value
}

module.exports = attachPropertyToObject
