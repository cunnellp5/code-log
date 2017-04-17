// Create a method all which takes an array and a predicate (function pointer),
//  and returns true if the predicate returns true for every element in the array.
//  Otherwise, it should return false. If the array is empty, it should return
//  true, since technically nothing failed the test.

function all( arr, fun ){
  if (fun() === NaN) {
    return false
  }
  fun() === true ? true : false
}

console.log(all([1,2,3,4,5], 9));
