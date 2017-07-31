// Create a function add(n) which returns a function that always adds n to any number
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6

function add(n) {
  function addRandom(y) {
    function addAnother(x) {
      return (n + y + x)
    }
    return addAnother
  }
  return addRandom;
}

console.log(add(3)(2)(2)); // 4
