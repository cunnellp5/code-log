// Given an object passed into a function,
// return the property requested

function getPropertyValue (objectToRead, propertyName) {
    // console.log(propertyName);
    // console.log(objectToRead);
    return (objectToRead[propertyName]);

    // return objectToRead.age;
}

module.exports = getPropertyValue
