_reduce = function(collection, iterator, accumulator) {
  let i = 0;
  if(!accumulator) {
    accumulator = collection[0]
    i++;
  }
  for (i; i < collection.length; i++) {
    accumulator = _iterator(accumulator, collection[i])
  }
  return accumulator;
};

 
 _iterator = function(accumulator, item) {
  return accumulator += item
}

 
 
console.log(_reduce([1,2,3], _iterator()))


// const answer = [1,2,3].reduce((a, b) => {
//   a = a + b
//   return a
// })

// console.log(answer)


// Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.